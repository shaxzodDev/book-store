package com.example.demo.controller;

import com.example.demo.converter.BookConverter;
import com.example.demo.dto.BookCreateAuthorDTO;
import com.example.demo.dto.BookDTO;
import com.example.demo.dto.BookTransferObject;
import com.example.demo.dto.ResponseData;
import com.example.demo.exceptions.BadRequestException;
import com.example.demo.enums.Category;
import com.example.demo.model.Author;
import com.example.demo.model.Book;
import com.example.demo.repository.AuthorRepository;
import com.example.demo.repository.BookRepository;
import com.example.demo.security.service.UserPrinciple;
import com.example.demo.service.BookService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@AllArgsConstructor
@RestController
//@CrossOrigin("*")
@RequestMapping("/api/v1")
public class BookController {

    private final BookService bookService;
    private final AuthorRepository authorRepository;
    private final BookRepository bookRepository;
    private final BookConverter bookConverter;

    @GetMapping("/book/list")
    public ResponseEntity<ResponseData<List<BookDTO>>> findAll(@RequestParam(required = false) String name, @RequestParam(required = false) Category category) {
        if (StringUtils.isNotBlank(name)) {
            return ResponseEntity.ok(new ResponseData<>(bookRepository.findByName("%" + name.toLowerCase() + "%")
                    .stream()
                    .map(bookConverter::toBookDTO)
                    .collect(Collectors.toList())));
        }

        if (category != null) {
            return ResponseEntity.ok(new ResponseData<>(bookRepository.findByFilter(category)
                    .stream()
                    .map(bookConverter::toBookDTO)
                    .collect(Collectors.toList())));
        }

        return ResponseEntity.ok(new ResponseData<>(bookRepository.findAll()
                .stream()
                .map(bookConverter::toBookDTO)
                .collect(Collectors.toList())));
    }

    @GetMapping("/book/list/top")
    public ResponseEntity<ResponseData<List<BookDTO>>> findAllTop() {
        return ResponseEntity.ok(new ResponseData<>(bookRepository.findTop()
                .stream()
                .map(bookConverter::toBookDTO)
                .collect(Collectors.toList())));
    }

    @PostMapping("/book/increment_review/id")
    public ResponseEntity<?> increment(@PathVariable Long id) {
        bookRepository.findById(id).ifPresent(b -> {
            b.setReviews(b.getReviews() + 1);
            bookRepository.save(b);
        });

        return ResponseEntity.ok("sucess");
    }

    @PostMapping("/book")
    public ResponseEntity<BookDTO> save(@RequestBody BookTransferObject bookTransferObject) {
        BookDTO book = this.bookService.save(
                bookTransferObject.getName(),
                Category.valueOf(bookTransferObject.getCategory()),
                bookTransferObject.getAuthorId(),
                bookTransferObject.getAvailableCopies());
        return ResponseEntity.ok(book);
    }

    @GetMapping("/book/{id}")
    public ResponseEntity<ResponseData<BookDTO>> findById(@PathVariable Long id) {
        return ResponseEntity.ok(new ResponseData<>(bookService.findById(id)));
    }

    @PutMapping("/book/edit/{id}")
    public ResponseEntity<BookDTO> edit(@PathVariable Long id, @RequestBody BookTransferObject bookTransferObject) {
        BookDTO book = this.bookService.edit(
                id,
                bookTransferObject.getName(),
                Category.valueOf(bookTransferObject.getCategory()),
                bookTransferObject.getAuthorId(),
                bookTransferObject.getAvailableCopies());
        return ResponseEntity.ok().body(book);
    }

    @PostMapping("/book/markAsTaken/{id}")
    public void markAsTaken(@PathVariable Long id) {
        this.bookService.markAsTakenBook(id);
    }

    @DeleteMapping("/book/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id) {
        this.bookService.deleteById(id);
        if(bookService.findById(id) != null) {
            return ResponseEntity.ok(new ResponseData<>("Muvaffaqiyatli o'chirildi!"));
        }
        return new ResponseEntity<>(new BadRequestException("id", "Ushbu id bilan kitob topilmadi!"), HttpStatus.BAD_REQUEST);
    }

    @PostMapping(value = "/author/book", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> create(@ModelAttribute BookCreateAuthorDTO dto) {
        Long userId = SecurityContextHolder.getContext() != null
                && SecurityContextHolder.getContext().getAuthentication() != null
                && SecurityContextHolder.getContext().getAuthentication().getPrincipal() != null
                ? ((UserPrinciple) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId() : -1L;
        dto.setAuthorId(authorRepository.findByUserId(userId).map(Author::getId).orElse(null));

        bookService.create(dto);
        return ResponseEntity.ok("Muvaffaqiyatli yaratildi!");
    }

    @GetMapping(value = "/pdf/url", produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<byte[]> getBookRelatedFile(@RequestParam String key) {
        if (StringUtils.isNotBlank(key)) {
            Optional<Book> book = bookRepository.findBookByUUidKey(key);
            if (book.isPresent()) {
                if (key.equals(book.get().getPdfUrlUUid())) {
                    String filePath = book.get().getPdfUrl();
                    try (FileInputStream fileInputStream = new FileInputStream(filePath)) {
                        return ResponseEntity.ok(IOUtils.toByteArray(fileInputStream));
                    } catch (IOException e) {
                        log.error(e.getMessage(), e);
                    }
                }
            }
        }

        return ResponseEntity.ok(new byte[0]);
    }

    @GetMapping(value = "/img/url", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<byte[]> getImg(@RequestParam String key) {
        if (StringUtils.isNotBlank(key)) {
            Optional<Book> book = bookRepository.findBookByUUidKey(key);
            if (book.isPresent()) {
                if (key.equals(book.get().getImageUrlUUid())) {
                    String filePath = book.get().getImageUrl();
                    try (FileInputStream fileInputStream = new FileInputStream(filePath)) {
                        return ResponseEntity.ok(IOUtils.toByteArray(fileInputStream));
                    } catch (IOException e) {
                        log.error(e.getMessage(), e);
                    }
                }
            }
        }

        return ResponseEntity.ok(new byte[0]);
    }
}
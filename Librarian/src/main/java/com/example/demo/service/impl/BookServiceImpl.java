package com.example.demo.service.impl;

import com.example.demo.converter.BookConverter;
import com.example.demo.dto.BookCreateAuthorDTO;
import com.example.demo.dto.BookDTO;
import com.example.demo.model.Author;
import com.example.demo.model.Book;
import com.example.demo.enums.Category;
import com.example.demo.repository.AuthorRepository;
import com.example.demo.repository.BookRepository;
import com.example.demo.security.service.FilePathService;
import com.example.demo.service.BookService;
import lombok.AllArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@AllArgsConstructor
@Transactional
@Service
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;
    private final AuthorRepository authorRepository;
    private final BookConverter bookConverter;
    private final FilePathService filePathService;

    /*@Override
    public List<BookDTO> findAll() {
        return this.bookRepository.findAllById();
    }*/

    @Override
    public BookDTO findById(Long id) {
        return bookConverter.toBookDTO(bookRepository.findById(id).orElse(new Book()));
    }

    @Override
    public BookDTO save(String name, Category category, Long authorId, Integer availableCopies) {
        Author author = authorRepository.findById(authorId).orElseThrow(RuntimeException::new);
        Book book = new Book(name,category,author,availableCopies);

        return bookConverter.toBookDTO(bookRepository.save(book));
    }


    @Override
    public BookDTO edit(Long id, String name, Category category, Long author, Integer availableCopies) {
        Book book = bookRepository.findById(id).get();
        book.setName(name);
        book.setAvailableCopies(availableCopies);
        book.setCategory(category);

        Author realAuthor = authorRepository.findById(author).orElseThrow(RuntimeException::new);
        book.setAuthor(realAuthor);

        book = bookRepository.save(book);
        return bookConverter.toBookDTO(book);
    }

    @Override
    public void deleteById(Long id) {
    bookRepository.deleteById(id);
    }

    @Override
    public void markAsTakenBook(Long id) {
        Book book = bookRepository.findById(id).orElseThrow(RuntimeException::new);
        book.setAvailableCopies(book.getAvailableCopies()-1);
        bookRepository.save(book);
    }

    @Override
    public void create(BookCreateAuthorDTO dto) {
        Book book = new Book();
        book.setAuthorId(dto.getAuthorId());
        book.setAuthor(dto.getAuthorId() != null ? authorRepository.findById(dto.getAuthorId()).orElse(null) : null);
        book.setAvailableCopies(dto.getAvailableCopies());
        book.setPrice(dto.getPrice());
        book.setDescription(dto.getDescription());
        book.setName(dto.getName());
        book.setCategory(dto.getCategory());

        book.setPdfUrl(filePathService.upload(dto.getPdfFile()).orElse(null));
        book.setImageUrl(filePathService.upload(dto.getImage()).orElse(null));
        bookRepository.save(book);
    }
}

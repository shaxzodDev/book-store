package com.example.demo.converter;

import com.example.demo.dto.BookDTO;
import com.example.demo.model.Book;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@AllArgsConstructor
@Transactional
@Component
public class BookConverter {

    public BookDTO toBookDTO(Book book) {
        BookDTO dto = new BookDTO();
        dto.setAvailableCopies(book.getAvailableCopies());
        dto.setName(book.getName());
        dto.setPdfUrl(ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/api/v1/pdf/url").queryParam("key", book.getPdfUrlUUid()).toUriString());
        dto.setImageUrl(ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/api/v1/img/url").queryParam("key", book.getImageUrlUUid()).toUriString());
        dto.setReviews(book.getReviews());
        dto.setCategory(book.getCategory());
        dto.setId(book.getId());
        dto.setAuthorId(book.getAuthorId());
        dto.setAuthorName(book.getAuthor() != null && book.getAuthor().getUser() != null ? book.getAuthor().getUser().getFullName() : null);
        dto.setDescription(book.getDescription());
        dto.setPrice(book.getPrice());
        dto.setRate(book.getRate());
        return dto;
    }

    public Book fromBookDTO(BookDTO dto) {
        Book book = new Book();
        book.setAvailableCopies(dto.getAvailableCopies());
        book.setName(dto.getName());
        book.setPdfUrl(dto.getPdfUrl());
        book.setReviews(dto.getReviews());
        book.setCategory(dto.getCategory());
        book.setId(dto.getId());
        book.setAuthorId(dto.getAuthorId());
        book.setDescription(dto.getDescription());
        book.setPrice(dto.getPrice());
        book.setRate(dto.getRate());
        return book;
    }
}


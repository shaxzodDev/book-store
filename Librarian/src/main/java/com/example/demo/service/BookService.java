package com.example.demo.service;

import com.example.demo.dto.BookCreateAuthorDTO;
import com.example.demo.dto.BookDTO;
import com.example.demo.enums.Category;


import java.util.List;

public interface BookService {

//    List<BookDTO> findAll();

    BookDTO findById(Long id);

    void deleteById(Long id);

    BookDTO save(String name, Category category, Long author,Integer availableCopies);

    BookDTO edit(Long id, String name, Category category, Long author, Integer availableCopies);

    void markAsTakenBook(Long id);

    void create(BookCreateAuthorDTO dto);
}

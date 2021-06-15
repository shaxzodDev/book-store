package com.example.demo.converter;

import com.example.demo.dto.AuthorDTO;
import com.example.demo.model.Author;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.stream.Collectors;

@Transactional
@AllArgsConstructor
@Component
public class AuthorConverter {

    private final BookConverter bookConverter;

    public AuthorDTO toAuthorDTO(Author author) {
        AuthorDTO dto = new AuthorDTO();
        dto.setId(author.getId());
        dto.setUserId(author.getUserId());
        dto.setBooks(dto.getBooks());

        return dto;
    }

    public Author fromAuthorDTO(AuthorDTO authorDTO) {
        Author author = new Author();
        author.setBooks(authorDTO.getBooks());
        author.setUserId(authorDTO.getUserId());
        return author;
    }
}

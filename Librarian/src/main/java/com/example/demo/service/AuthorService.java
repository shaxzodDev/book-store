package com.example.demo.service;

import com.example.demo.dto.AuthorDTO;
import com.example.demo.dto.AuthorSignUpDTO;

import java.util.List;

public interface AuthorService {

    List<AuthorDTO> findAll();

    AuthorDTO findById(Long id);

    void deleteById(Long id);

    void registerAuthor(AuthorSignUpDTO authorSignUpDTO);
}

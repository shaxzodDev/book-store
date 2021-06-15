package com.example.demo.repository;

import com.example.demo.dto.AuthorDTO;
import com.example.demo.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {

    @Query("select new com.example.demo.dto.AuthorDTO(a.id, a.userId, a.books) from Author a")
    List<AuthorDTO> findAllDTOConverted();

    @Query("select a from Author a where a.user.username = :username")
    Optional<Author> findByUsername(String username);

    @Query("select a from Author a where a.userId = :userId")
    Optional<Author> findByUserId(Long userId);
}

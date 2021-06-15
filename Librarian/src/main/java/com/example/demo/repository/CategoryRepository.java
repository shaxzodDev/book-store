package com.example.demo.repository;

import com.example.demo.enums.Category;
import com.example.demo.model.BookCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<BookCategory, Long> {
    Optional<BookCategory> findByName(Category name);
}

package com.example.demo.repository;

import com.example.demo.dto.BookDTO;
import com.example.demo.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookRepository extends JpaRepository<Book,Long> {

    /*@Query("select new com.example.demo.dto.BookDTO(b.id, " +
            "b.name, b.category, b.authorId, b.availableCopies, b.pdfUrl, b.reviews, " +
            "CONCAT(coalesce(b.author.user.firstName, '') , ' ', coalesce(b.author.user.lastName, '')), b.description, b.rate, b.price) " +
            "from Book b")
    List<BookDTO> findAllById();*/

    @Query("select b from Book b where (b.pdfUrlUUid = :key or b.imageUrlUUid = :key)")
    Optional<Book> findBookByUUidKey(String key);

    @Query("select b from Book b where lower(b.name) like :name")
    List<Book> findByName(String name);
}

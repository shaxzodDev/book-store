package com.example.demo.model;

import com.example.demo.enums.Category;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "book")
public class Book extends AuditingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name")
    private String name;

    @Enumerated(value = EnumType.STRING)
    @Column(name = "category")
    private Category category;

    @Column(name = "author_id")
    private Long authorId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "author_id",
            updatable = false,
            insertable = false,
            foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT))
    private Author author;

    @Column(name = "available_copies")
    private Integer availableCopies;

    @Column(name = "description")
    private String description;

    @Column(name = "pdf_url")
    private String pdfUrl;

    @Column(name = "pdf_url_uuid")
    private final String pdfUrlUUid = UUID.randomUUID().toString();

    @Column(name = "img_url")
    private String imageUrl;

    @Column(name = "img_url_uuid")
    private final String imageUrlUUid = UUID.randomUUID().toString();

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "reviews")
    private Long reviews;

    @Column(name = "rate")
    private BigDecimal rate;

    public Book(String name, Category category, Author author, Integer availableCopies) {
        this.name = name;
        this.category = category;
        this.author = author;
        this.availableCopies = availableCopies;
    }
}

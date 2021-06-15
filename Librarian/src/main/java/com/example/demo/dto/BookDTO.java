package com.example.demo.dto;

import com.example.demo.enums.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class BookDTO {
    private Long id;
    private String name;
    private Category category;
    private Long authorId;
    private Integer availableCopies;
    private String pdfUrl;
    private String imageUrl;
    private Long reviews;
    private String authorName;
    private String description;
    private BigDecimal rate;
    private BigDecimal price;
}

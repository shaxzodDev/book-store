package com.example.demo.dto;

import com.example.demo.enums.Category;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;

@ToString
@Getter
@Setter
public class BookCreateAuthorDTO {
    private String name;
    private Category category;
    private Long authorId;
    private Integer availableCopies;
    private String description;
    private BigDecimal price;
    private MultipartFile pdfFile;
    private MultipartFile image;
}

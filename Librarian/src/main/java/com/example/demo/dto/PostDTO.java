package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostDTO {
    Long id;
    Long authorId;
    String authorFullName;
    String content;
}

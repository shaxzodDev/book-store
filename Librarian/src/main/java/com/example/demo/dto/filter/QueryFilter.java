package com.example.demo.dto.filter;

import com.example.demo.enums.Category;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
public class QueryFilter extends BaseFilter {

    private String name;
    private Category category;
    private Long authorId;
    private Integer availableCopies;
    private Long reviews;

}

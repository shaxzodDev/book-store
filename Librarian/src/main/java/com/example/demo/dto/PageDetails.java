package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.domain.PageRequest;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public  class PageDetails<T> {

    List<T> dataList;
    private PageRequest pageRequest;
    private Long totalQuantity;

}
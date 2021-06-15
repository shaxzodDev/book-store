package com.example.demo.controller;

import com.example.demo.dto.ResponseData;
import com.example.demo.enums.Category;
import com.example.demo.model.Country;
import com.example.demo.repository.CategoryRepository;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/category")
public class CategoryController {

    @GetMapping("/list")
    ResponseEntity<ResponseData<List<SelectItem>>> getAllCountries() {
        return ResponseEntity.ok(new ResponseData<>(Arrays.stream(Category.values())
                .map(c -> new SelectItem(c.ordinal(), c)).collect(Collectors.toList())));
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class SelectItem {
        private int order;
        private Category name;
    }
}

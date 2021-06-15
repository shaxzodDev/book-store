package com.example.demo.controller;

import com.example.demo.dto.ResponseData;
import com.example.demo.model.Country;
import com.example.demo.repository.CountryRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/country")
public class CountryController {

    private final CountryRepository countryRepository;

    @GetMapping("/list")
    ResponseEntity<ResponseData<List<Country>>> getAllCountries() {
        return ResponseEntity.ok(new ResponseData<>(countryRepository.findAll()));
    }
}

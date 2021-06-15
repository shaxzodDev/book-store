package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class AddressDTO {

    private Long id;

    private String address;

    @NotBlank
    @Valid
    private String city;

    @NotNull
    @Valid
    private Long countryId;
}

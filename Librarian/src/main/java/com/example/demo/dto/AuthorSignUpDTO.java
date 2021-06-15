package com.example.demo.dto;

import com.example.demo.dto.request.SignupDTO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
public class AuthorSignUpDTO extends SignupDTO {
    private AuthorDTO authorDTO;
    private Long countryId;
    private String city;
    private String addressText;
}

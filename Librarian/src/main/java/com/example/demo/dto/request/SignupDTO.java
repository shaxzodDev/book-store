package com.example.demo.dto.request;

import com.example.demo.constants.ValidationConstants;
import com.example.demo.dto.AddressDTO;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
public class SignupDTO {

    @NotBlank
    @Size(min = 3, max = 50)
    private String firstName;

    @NotBlank
    @Size(min = 3, max = 60)
    private String lastName;

    @NotBlank
    @Size(min = 3, max = 50)
    private String username;

    @NotBlank
    @Size(min = 6, max = 9)
    private String password;

    @NotBlank
    @Size(max = 60)
    @Email
    @Pattern(regexp = ValidationConstants.EMAIL_REGEX)
    private String email;

    @Pattern(regexp = ValidationConstants.PHONE_REGEX)
    private String phoneNumber;

    private AddressDTO address;

    private Set<String> roles = new HashSet<>();
}

package com.example.demo.dto.response;

import com.example.demo.dto.UserDTO;
import lombok.Getter;
import lombok.Setter;

/**
 * JwtResponse.java is returned by SpringBoot server after successful authentication, it contains 2 parts:
 *
 * JWT Token
 * Schema Type of Token
 */
@Getter
@Setter
public class JwtResponse {

    private String token;
    private String type = "Bearer";
    private UserDTO user;

    public JwtResponse(String accessToken, UserDTO user) {
        this.token = accessToken;
        this.user = user;
    }

}

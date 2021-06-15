package com.example.demo.controller;

import com.example.demo.converter.UserConverter;
import com.example.demo.dto.UserDTO;
import com.example.demo.dto.request.LoginDTO;
import com.example.demo.dto.request.SignupDTO;
import com.example.demo.dto.response.JwtResponse;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@AllArgsConstructor
@RestController
@RequestMapping("/api/auth")
public class AuthRestAPI {

    private final UserRepository userRepository;
    private final UserService userService;
    private final UserConverter userConverter;

    @PostMapping("/sign_in")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginDTO loginDTO) {

        return new ResponseEntity<>(new JwtResponse(
                userService.authenticateUser(loginDTO),
                userRepository.findByUsername(loginDTO.getUsername()).map(userConverter::toUserDTO).orElse(new UserDTO())
        ), HttpStatus.OK);
    }

    @PostMapping("/sign_up")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupDTO signupDTO) {

        if (userRepository.existsByUsername(signupDTO.getUsername())
                || userRepository.existsByEmail(signupDTO.getEmail())
        ) {
            return new ResponseEntity<>("Ushbu foydalanuvchi nomi allaqachon mavjud", HttpStatus.BAD_REQUEST);
        }

        userService.createUserByRegistration(signupDTO);
        return authenticateUser(new LoginDTO(signupDTO.getUsername(), signupDTO.getPassword()));
    }
}

package com.example.demo.controller;

import com.example.demo.converter.UserConverter;
import com.example.demo.dto.AuthorDTO;
import com.example.demo.dto.AuthorSignUpDTO;
import com.example.demo.dto.ResponseData;
import com.example.demo.dto.UserDTO;
import com.example.demo.dto.request.LoginDTO;
import com.example.demo.dto.response.JwtResponse;
import com.example.demo.exceptions.BadRequestException;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.AuthorService;
import com.example.demo.service.UserService;
import lombok.AllArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class AuthorController {

    private final AuthorService authorService;
    private final UserService userService;
    private final UserRepository userRepository;
    private final UserConverter userConverter;

    @GetMapping("/author/list")
    public ResponseEntity<ResponseData<List<AuthorDTO>>> listAllAuthors(){
        return ResponseEntity.ok(new ResponseData<>(authorService.findAll()));
    }

    @GetMapping("/author/{id}")
    public ResponseEntity<ResponseData<AuthorDTO>> findById(@PathVariable Long id){
        return ResponseEntity.ok(new ResponseData<>(authorService.findById(id)));
    }

    @PostMapping(value = "/author/sign_up", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<JwtResponse> signUpAsAuthor(@RequestBody AuthorSignUpDTO authorSignUpDTO) {

        if (StringUtils.isBlank(authorSignUpDTO.getUsername())) {
            throw new BadRequestException("username", "Foydalanuvchi nomi kiritilishi shart!");
        }

        if (StringUtils.isBlank(authorSignUpDTO.getPassword())) {
            throw new BadRequestException("password", "Parol kiritilishi shart!");
        }
        authorService.registerAuthor(authorSignUpDTO);

        return ResponseEntity.ok(new JwtResponse(
                userService.authenticateUser(new LoginDTO(authorSignUpDTO.getUsername(), authorSignUpDTO.getPassword())),
                userRepository.findByUsername(authorSignUpDTO.getUsername())
                        .map(userConverter::toUserDTO).orElse(new UserDTO()))
        );
    }
}

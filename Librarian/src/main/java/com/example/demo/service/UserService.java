package com.example.demo.service;

import com.example.demo.dto.UserDTO;
import com.example.demo.dto.request.LoginDTO;
import com.example.demo.dto.request.SignupDTO;

public interface UserService {
    UserDTO createUserByRegistration(SignupDTO signupDTO);

    String authenticateUser(LoginDTO loginDTO);
}

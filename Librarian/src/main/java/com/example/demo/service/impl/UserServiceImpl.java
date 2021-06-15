package com.example.demo.service.impl;

import com.example.demo.converter.UserConverter;
import com.example.demo.dto.UserDTO;
import com.example.demo.dto.request.LoginDTO;
import com.example.demo.dto.request.SignupDTO;
import com.example.demo.exceptions.BadRequestException;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.jwt.JwtProvider;
import com.example.demo.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@AllArgsConstructor
@Transactional
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserConverter userConverter;
    private final JwtProvider jwtProvider;
    private final AuthenticationManager authenticationManager;

    @Override
    public UserDTO createUserByRegistration(SignupDTO signupDTO) {

        User user = userConverter.fromSignupDTO(signupDTO);
        user = userRepository.save(user);
        return userConverter.toUserDTO(user);
    }

    @Override
    public String authenticateUser(LoginDTO loginDTO) {

        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginDTO.getUsername(),
                            loginDTO.getPassword()
                    )
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);
            return jwtProvider.generateJwtToken(authentication);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            throw new BadRequestException("username", "Noto'g'ri foydalanuvchi nomi yoki parol kiritildi!");
        }
    }
}

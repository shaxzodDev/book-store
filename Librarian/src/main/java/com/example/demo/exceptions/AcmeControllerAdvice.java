package com.example.demo.exceptions;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@Slf4j
@ControllerAdvice
public class AcmeControllerAdvice extends ResponseEntityExceptionHandler {

    @ExceptionHandler(BadRequestException.class)
    @ResponseBody
    ResponseEntity<?> handleControllerException(BadRequestException ex) {

        return new ResponseEntity<>(

                CustomErrorType.builder()
                        .code(400)
                        .customMessage(ex.getMessage())
                        .field(ex.getField())
                        .status(HttpStatus.BAD_REQUEST).build(),

                HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(Exception.class)
    @ResponseBody
    ResponseEntity<?> handleException(Exception ex) {

        log.error(ex.getMessage(), ex);
        return new ResponseEntity<>(

                CustomErrorType.builder()
                        .code(500)
                        .customMessage("Qandaydir Xatolik Sodir bo'ldi!")
                        .systemMessage(ex.getMessage())
                        .status(HttpStatus.INTERNAL_SERVER_ERROR).build(),

                HttpStatus.BAD_REQUEST
        );
    }
}
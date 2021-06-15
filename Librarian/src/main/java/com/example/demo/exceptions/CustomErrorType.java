package com.example.demo.exceptions;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class CustomErrorType {

    HttpStatus status;

    int code;

    String field;

    String customMessage;

    String systemMessage;

}

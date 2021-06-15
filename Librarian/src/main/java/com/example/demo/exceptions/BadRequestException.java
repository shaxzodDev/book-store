package com.example.demo.exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BadRequestException extends RuntimeException {

    String message;

    int code = 400;

    String field;

    public BadRequestException(String field, String message) {
        this.message = message;
        this.field = field;
    }

}

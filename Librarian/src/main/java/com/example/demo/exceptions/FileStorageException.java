package com.example.demo.exceptions;

public class FileStorageException extends Throwable {

    String message;

    public FileStorageException(String message) {
        this.message = message;
    }

}


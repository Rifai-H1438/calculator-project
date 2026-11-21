package com.CalculatorBackendApplication.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ArithmeticException.class)
    public ResponseEntity<Map<String, Object>>
    handleArithmeticException(ArithmeticException ex) {

        Map<String, Object> errorResponse = Map.of(
                "timestamp", LocalDateTime.now(),
                "status", 400,
                "error", "Bad Request",
                "message", ex.getMessage()
        );

        return new ResponseEntity<>(
                errorResponse,
                HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Map<String, Object>>
    handleIllegalArgumentException(IllegalArgumentException ex) {

        Map<String, Object> errorResponse = Map.of(
                "timestamp", LocalDateTime.now(),
                "status", 400,
                "error", "Bad Request",
                "message", ex.getMessage()
        );

        return new ResponseEntity<>(
                errorResponse,
                HttpStatus.BAD_REQUEST
        );
    }
}
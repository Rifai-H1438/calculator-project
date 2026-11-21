package com.CalculatorBackendApplication.dto;

public record CalculationRequest(
        double number1,
        double number2,
        String operation
) {}
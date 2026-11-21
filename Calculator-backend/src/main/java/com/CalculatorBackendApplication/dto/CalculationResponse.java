package com.CalculatorBackendApplication.dto;

public record CalculationResponse(
        double result,
        String message
) {}
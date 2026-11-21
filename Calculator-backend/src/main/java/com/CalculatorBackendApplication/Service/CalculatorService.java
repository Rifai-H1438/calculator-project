package com.CalculatorBackendApplication.Service;

import org.springframework.stereotype.Service;

@Service
public class CalculatorService {

        public double calculate(
                double number1,
                double number2,
                String operation) {

            switch (operation.toUpperCase()) {

                case "ADD":
                    return number1 + number2;

                case "SUBTRACT":
                    return number1 - number2;

                case "MULTIPLY":
                    return number1 * number2;

                case "DIVIDE":
                    if (number2 == 0) {
                        throw new IllegalArgumentException(
                                "Cannot divide by zero"
                        );
                    }
                    return number1 / number2;

                default:
                    throw new IllegalArgumentException(
                            "Invalid operation"
                    );
            }
        }
}

package com.CalculatorBackendApplication.Controller;

import com.CalculatorBackendApplication.Service.CalculatorService;
import com.CalculatorBackendApplication.dto.CalculationRequest;
import com.CalculatorBackendApplication.dto.CalculationResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/calculator")
@CrossOrigin(origins = {
        "http://localhost:3000",
        "https://YOUR-PROJECT.vercel.app"
})
public class CalculatorController {

    private final CalculatorService service;

    public CalculatorController(CalculatorService service) {
        this.service = service;
    }

    @PostMapping("/calculate")
    public CalculationResponse calculate(
            @RequestBody CalculationRequest request) {

        double result = service.calculate(
                request.number1(),
                request.number2(),
                request.operation()
        );

        return new CalculationResponse(
                result,
                "Calculation successful"
        );
    }
}
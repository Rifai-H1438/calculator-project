
import React, { useState } from "react";
import { calculate } from "../services/calculatorService";
import "./Calculator.css";


function Calculator() {

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operation, setOperation] = useState("Add");

  const [result, setResult] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCalculate = async () => {

    setError("");
    setResult(null);
    setMessage("");

    // Validation
    if (number1.trim() === "" || number2.trim() === "") {
      setError("Please enter both numbers");
      return;
    }

    if (
      !Number.isFinite(Number(number1)) ||
      !Number.isFinite(Number(number2))
    ) {
      setError("Please enter valid numbers");
      return;
    }

    try {

      setLoading(true);

      // Calling Spring Boot API
      const response = await calculate(
        number1,
        number2,
        operation
      );

      // Reading backend response
      setResult(response.result);
      setMessage(response.message);

    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);

    }
  };

  const handleClear = () => {

    setNumber1("");
    setNumber2("");
    setOperation("Add");

    setResult(null);
    setMessage("");
    setError("");

  };

  return (

    <div className="calculator-container">

      <div className="calculator-card">

        <h1>React Calculator</h1>

        <p className="subtitle">
          Created using React + Java Spring Boot
        </p>

        <div className="form-group">

          <label>First Number</label>

          <input
            type="number"
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
            placeholder="Enter first number"
          />

        </div>

        <div className="form-group">

          <label>Operation</label>

          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          >

            <option value="Add">Addition (+)</option>
            <option value="Subtract">Subtraction (-)</option>
            <option value="Multiply">Multiplication (×)</option>
            <option value="Divide">Division (÷)</option>

          </select>

        </div>

        <div className="form-group">

          <label>Second Number</label>

          <input
            type="number"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
            placeholder="Enter second number"
          />

        </div>

        <div className="button-group">

          <button
            onClick={handleCalculate}
            disabled={loading}
          >
            {loading ? "Calculating..." : "Calculate"}
          </button>

          <button
            className="clear-button"
            onClick={handleClear}
          >
            Clear
          </button>

        </div>

        {result !== null && (

          <div className="result-box">

            <h3>Result</h3>

            <p>{result}</p>

            <small>{message}</small>

          </div>

        )}

        {error && (

          <div className="error-box">

            <strong>Error!</strong>

            <p>{error}</p>

          </div>

        )}

      </div>

    </div>

  );

}

export default Calculator;

function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  const resultElement = document.getElementById("result");
  const errorElement = document.getElementById("error");

  resultElement.textContent = "";
  errorElement.textContent = "";

  if (isNaN(num1) || isNaN(num2)) {
    errorElement.textContent = "Please enter valid numbers.";
    return;
  }

  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        errorElement.textContent = "Cannot divide by zero.";
        return;
      }
      result = num1 / num2;
      break;
    default:
      errorElement.textContent = "Invalid operation selected.";
      return;
  }

  resultElement.textContent = `Result: ${result}`;
}

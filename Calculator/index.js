function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        throw new Error("Não é possível dividir por zero.");
      }
      return num1 / num2;
    default:
      throw new Error("Operador inválido.");
  }
}

const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));
const operator = prompt("Digite o operador (+, -, *, /):");

try {
  const result = calculate(num1, num2, operator);
  console.log(`Resultado: ${result}`);
} catch (error) {
  console.error(error.message);
}
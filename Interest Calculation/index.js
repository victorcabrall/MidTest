function calculateFinalValue(initialCapital, interestRate, investmentTime) {
  let finalValue =
    initialCapital * Math.pow(1 + interestRate / 100, investmentTime);
  return finalValue;
}

let initialCapital = parseFloat(prompt("Insira o capital inicial"));
let interestRate = parseFloat(prompt("Insira a taxa de juros (em %)"));
let investmentTime = parseInt(
  prompt("Insira o tempo de investimento (em meses)")
);

let finalValue = calculateFinalValue(
  initialCapital,
  interestRate,
  investmentTime
);

alert(`O valor final do investimento é R$${finalValue.toFixed(2)}`);

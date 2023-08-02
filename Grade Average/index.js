let subject1 = parseFloat(prompt("Insira a nota do primeiro assunto"));
let subject2 = parseFloat(prompt("Insira a nota do segundo assunto"));
let subject3 = parseFloat(prompt("Insira a nota do terceiro assunto"));

let average = (subject1 + subject2 + subject3) / 3;

alert(`A média das notas é ${average.toFixed(2)}`);
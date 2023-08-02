function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  let num = prompt("Digite um número");
  let result = factorial(num);
  alert(`O fatorial de  ${num} é ${result}.`);
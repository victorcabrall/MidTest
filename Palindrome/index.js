function isPalindrome(word) {
  let reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

let inputWord = prompt("Digite uma palavra:");
if (isPalindrome(inputWord)) {
  alert(`${inputWord} é um palíndromo.`);
} else {
  alert(`${inputWord} não é um palíndromo.`);
}

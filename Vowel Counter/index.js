function countVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  let sentence = prompt("Por favor, insira uma frase");
  let numberOfVowels = countVowels(sentence);
  alert(`A frase tem ${numberOfVowels} vogais`);
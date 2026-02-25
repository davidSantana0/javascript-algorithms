/**
 * Kata: Simple Vowel Counter
 * Level: Basic Logic / Loops
 * Platform: Personal Training
 *
 * Description:
 * Counts the number of vowels in a given text by checking
 * each character against a predefined list of vowels.
 */

function countVowels(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;

  for (let char of text.toLowerCase()) {
    if (vowels.includes(char)) {
      counter++;
    }
  }

  return `${text} has ${counter} vowels`;
}

const vowelResult = countVowels("IA");
console.log(vowelResult);

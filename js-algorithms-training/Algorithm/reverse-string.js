/**
 * Kata: String Reversal
 * Level: Basic Logic / Strings
 * Platform: Personal Training
 *
 * Description:
 * Reverses a string by iterating backwards from the last character
 * to the first, building a new string.
 */

function reverseSentence(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

const reversedStr = reverseSentence("Program");
console.log(reversedStr);

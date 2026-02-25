/**
 * Kata: Longest Word in Array
 * Level: Basic / Array Reduction
 * Platform: Personal Training
 *
 * Description:
 * Uses .reduce() to compare the length of strings in an array
 * and return the longest one.
 */

function getLongestWord(wordsArray) {
  return wordsArray.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  });
}

const words = ["I", "am", "a", "Programmer", "and", "I", "love", "JavaScript"];
const longest = getLongestWord(words);
console.log(
  `The longest word is "${longest}" with ${longest.length} characters.`
);

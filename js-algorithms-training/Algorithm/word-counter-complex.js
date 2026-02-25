/**
 * Kata: Word Counter
 * Level: Intermediate / String Parsing
 * Platform: Personal Training
 *
 * Description:
 * Counts words in a string by identifying transition points
 * between separators and alphanumeric characters.
 */

function countWords(text) {
  let wordCount = 0;
  let isInsideWord = false;

  for (let char of text) {
    if (isSeparator(char)) {
      isInsideWord = false;
    } else if (!isInsideWord) {
      wordCount++;
      isInsideWord = true;
    }
  }
  return wordCount;
}

function isSeparator(char) {
  const separators = [" ", "\t", "\n", ",", ".", ";", "!", "?", ""];
  return separators.includes(char);
}

console.log(countWords("Let's study relational databases!"));

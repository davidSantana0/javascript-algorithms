/**
 * Kata: Character Counter
 * Level: Basic / String Manipulation
 * Platform: Personal Training
 *
 * Description:
 * Splits a string into an array of characters and filters them 
 * to count how many times the letter 'a' appears.
 */

const name = "Daiane";

const charCount = name
  .split("")
  .filter((letter) => letter.toLowerCase() === "a").length;

console.log(charCount);
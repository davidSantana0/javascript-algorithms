/**
 * Kata: String Case Converter
 * Level: Basic Logic
 * Platform: Personal Training
 *
 * Description:
 * Takes a string as input and prints both its fully uppercase
 * and fully lowercase versions to the console.
 */

function convertStringCase(text) {
  const upperCaseText = text.toUpperCase();
  const lowerCaseText = text.toLowerCase();

  console.log(`Uppercase: ${upperCaseText}`);
  console.log(`Lowercase: ${lowerCaseText}`);
}

convertStringCase("Greetings to the family of God");

/**
 * Kata: Iterate Through Characters
 * Level: Basic Logic
 * Platform: Personal Training
 *
 * Description:
 * Converts a string into an array of characters and iterates through
 * each one, printing them individually to the console.
 */

function iterateThroughCharacters() {
  const word = "Backend";
  const letters = word.split("");

  for (let i = 0; i < letters.length; i++) {
    const char = letters[i];
    console.log(char);
  }
}

iterateThroughCharacters();

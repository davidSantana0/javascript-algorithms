/**
 * Kata: Vowel Counter with Normalization
 * Level: Basic Logic / Regex
 * Platform: Personal Training
 *
 * Description:
 * Counts the number of vowels in a string. It includes a normalization
 * step to remove diacritics (accents) before counting, ensuring
 * characters like 'é' or 'á' are counted correctly as vowels.
 */

 function countVowels(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  // Normalizes the string to decompose combined characters and removes diacritics
  const cleanText = text.normalize("NFD").replace(/\p{Diacritic}/gu, "");

  for (let i = 0; i < cleanText.length; i++) {
    const char = cleanText[i];
    const isVowel = vowels.includes(char.toLowerCase());

    if (isVowel) {
      count++;
    }
  }

  console.log(`In the text: "${text}", we found ${count} vowels.`);
  return count;
}

countVowels("Programming is fun");

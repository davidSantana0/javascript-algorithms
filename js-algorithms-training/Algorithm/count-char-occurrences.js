/**
 * Kata: Count Character Occurrences in Array
 * Level: Basic Logic / String Manipulation
 * Platform: Personal Training
 *
 * Description:
 * This function iterates through an array of strings and counts how many times
 * a specific character (key) appears across all elements.
 * The comparison is case-insensitive.
 */

function countCharOccurrences() {
  const wordsArray = ["Programming", "is", "a", "lot", "fun"];
  const searchKey = "m";
  let totalCount = 0;

  for (let i = 0; i < wordsArray.length; i++) {
    const currentWord = wordsArray[i];

    for (let j = 0; j < currentWord.length; j++) {
      const currentLetter = currentWord[j];

      if (searchKey.toLowerCase() === currentLetter.toLowerCase()) {
        totalCount++;
      }
    }
  }

  console.log(`The character '${searchKey}' appeared ${totalCount} times.`);
  return totalCount;
}

countCharOccurrences();

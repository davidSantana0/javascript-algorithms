/**
 * Kata: Palindrome Check
 * Level: Basic Logic / String Manipulation
 * Platform: Personal Training
 *
 * Description:
 * This function checks if a given string is a palindrome by reversing it
 * and comparing the reversed version with the original string.
 */

function checkPalindrome() {
  const word = "radar";
  const invertedWord = word.split("").reverse().join("");

  const isPalindrome = word === invertedWord;
  console.log(
    `Original word: "${word}" | Inverted: "${invertedWord}" | Is Palindrome: ${isPalindrome}`
  );
}

checkPalindrome();

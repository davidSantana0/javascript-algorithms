/**
 * Kata: Binary Search Implementation
 * Level: Intermediate Logic / Searching
 * Platform: Personal Training
 *
 * Description:
 * Efficiently finds a target value in a sorted array by repeatedly
 * dividing the search interval in half.
 */

function binarySearch() {
  const numbers = [10, 20, 30, 40, 50, 60, 70];
  const target = 60;

  let start = 0;
  let end = numbers.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (numbers[middle] === target) {
      console.log("Found it!");
      return;
    } else if (target > numbers[middle]) {
      console.log("Searching...");
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  console.log(numbers);
  return;
}

binarySearch();

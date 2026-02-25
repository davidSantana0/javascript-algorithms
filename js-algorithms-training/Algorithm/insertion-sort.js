/**
 * Kata: Insertion Sort Algorithm
 * Level: Basic Logic / Sorting
 * Platform: Personal Training
 *
 * Description:
 * Builds the final sorted array one item at a time by comparing
 * each new element with the already-sorted section.
 */

function insertionSort() {
  const numbers = [5, 3, 8, 4, 2];

  for (let i = 1; i < numbers.length; i++) {
    for (let j = i; j > 0; j--) {
      if (numbers[j] < numbers[j - 1]) {
        // Swaps elements if the current one is smaller than the previous one
        let temp = numbers[j];
        numbers[j] = numbers[j - 1];
        numbers[j - 1] = temp;
      }
    }
  }

  return console.log(numbers);
}

insertionSort();

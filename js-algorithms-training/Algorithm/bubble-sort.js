/**
 * Kata: Bubble Sort Algorithm
 * Level: Basic Logic / Sorting
 * Platform: Personal Training
 *
 * Description:
 * Sorts an array by repeatedly stepping through the list, comparing
 * adjacent elements and swapping them if they are in the wrong order.
 */

function bubbleSort() {
  const numbers = [5, 3, 8, 4, 2];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        // Swaps elements using a temporary variable
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }

  return console.log(numbers);
}

bubbleSort();

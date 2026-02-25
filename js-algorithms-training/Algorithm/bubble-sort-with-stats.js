/**
 * Kata: Bubble Sort with Stats
 * Level: Intermediate / Sorting
 * Platform: Personal Training
 *
 * Description:
 * Implements Bubble Sort and tracks how many swaps (exchanges)
 * were needed to fully sort the array.
 */

function bubbleSortWithStats(array) {
  let swaps = 0;
  const len = array.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]; // ES6 Destructuring swap
        swaps++;
      }
    }
  }

  console.log(`Total swaps made: ${swaps}`);
  return array;
}

console.log(bubbleSortWithStats([5, 1, 4, 8, 3]));

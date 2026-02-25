/**
 * Kata: Linear Search Implementation
 * Level: Basic Logic / Searching
 * Platform: Personal Training
 *
 * Description:
 * Iterates through an array sequentially to find a target value.
 * Returns a success message if found, or a failure message if not.
 */

function linearSearch() {
  const numbers = [10, 20, 30, 40, 50];
  const target = 30;

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];

    if (element === target) {
      return console.log(
        `In your numbers: ${numbers}, the item ${element} was found.`
      );
    }
  }

  console.log("Item not found.");
}

linearSearch();

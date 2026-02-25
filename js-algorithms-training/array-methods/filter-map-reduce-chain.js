/**
 * Kata: Complex Chain Transformation
 * Level: Intermediate / Method Chaining
 * Platform: Personal Training
 *
 * Description:
 * Filters objects by value, extracts the numeric property,
 * and reduces them to a single sum total.
 */

const items = [
  { name: "House", value: 22000 },
  { name: "Television", value: 1500 },
  { name: "Cell phone", value: 2000 },
  { name: "Cup", value: 2.5 },
];

const highValueTotal = items
  .filter((item) => item.value > 1000)
  .map((item) => item.value)
  .reduce((acc, val) => acc + val, 0);

console.log(highValueTotal);

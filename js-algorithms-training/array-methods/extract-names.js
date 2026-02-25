/**
 * Kata: Extract and Transform Names
 * Level: Basic / Array Methods
 * Platform: Personal Training
 *
 * Description:
 * Uses the .map() method to iterate through an array of objects
 * and extract only the 'name' property into a new array.
 */

const users = [
  { name: "Daiane", age: 18 },
  { name: "David", age: 22 },
  { name: "Cauã", age: 17 },
];

const names = users.map((user) => user.name);
console.log(names);

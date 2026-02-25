/**
 * Kata: Find Object by Property
 * Level: Basic Logic / Array Methods
 * Platform: Personal Training
 *
 * Description:
 * Searches through an array of objects to find the first element
 * that satisfies a specific condition (in this case, age greater than 18).
 */

const people = [
  {
    name: "David",
    age: 18,
    country: "Brazil",
  },
  {
    name: "Daiane",
    age: 22,
    country: "USA",
  },
  {
    name: "Eduardo",
    age: 10,
    country: "Germany",
  },
];

// Finds the first person in the array who is older than 18
const adult = people.find((person) => person.age > 18);

console.log(adult);

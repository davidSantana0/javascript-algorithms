/**
 * Kata: Filter and Transform Products
 * Level: Intermediate / Method Chaining
 * Platform: Personal Training
 *
 * Description:
 * Filters a list of products to find those with a price greater than 10,
 * then maps the result to return only their names.
 */

const products = [
  { name: "Shampoo", price: 10.99 },
  { name: "Brush", price: 5.82 },
  { name: "Cup", price: 2.0 },
  { name: "Deodorant", price: 8.25 },
  { name: "Notebook", price: 21.35 },
  { name: "Remote Control", price: 34.0 },
];

const expensiveProductNames = products
  .filter((product) => product.price > 10)
  .map((product) => product.name);

console.log(expensiveProductNames);

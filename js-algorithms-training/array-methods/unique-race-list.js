/**
 * Kata: Unique Values from Objects
 * Level: Intermediate / Array Filtering
 * Platform: Personal Training
 *
 * Description:
 * Extracts a specific property from an array of objects and
 * filters out duplicates to return a list of unique values.
 */

const characters = [
  { name: "Goku", race: "Saiyan" },
  { name: "Ichigo", race: "Blender" },
  { name: "Subaru", race: "Human" },
  { name: "Vegeta", race: "Saiyan" },
];

const uniqueRaces = characters
  .map((char) => char.race)
  .filter((race, index, array) => array.indexOf(race) === index);

console.log(uniqueRaces);

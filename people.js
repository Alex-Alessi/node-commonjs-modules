const names = require("./info/names");
const hobbies = require("./info/hobbies");

const fullName = names("Mario", "Rossi");
const hobbiesList = hobbies(["Calcio", "Rugby"]);
console.log(hobbiesList);

const createPerson = () => {
  let person = {};
  person.fullName = fullName;
  person.fullName.hobbies = hobbiesList;
  return person;
};

console.log(person);

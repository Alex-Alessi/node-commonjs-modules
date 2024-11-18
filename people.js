const names = require("./info/names");
const hobbies = require("./info/hobbies");

const fullName = names("Mario", "Rossi");
const hobbiesList = hobbies("Calcio", "Rugby", "Tennis");

const person = () => {
  return {
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    hobbies: hobbiesList,
  };
};

console.log(person());

const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeId = employees.find((employee) => employee.id === id);
  const specieFirst = employeeId.responsibleFor[0];
  const listResidents = species.find((specie) => specie.id === specieFirst).residents;
  const oldestAnimal = listResidents.reduce((prev, curr) => ((prev.age > curr.age) ? prev : curr));
  const array = [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
  return array;
}

console.log(getOldestFromFirstSpecies('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

module.exports = getOldestFromFirstSpecies;

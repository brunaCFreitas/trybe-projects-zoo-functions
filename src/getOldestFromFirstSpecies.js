const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(employeeId) {
  const employee = employees.find(({ id }) => id === employeeId);
  const [specieFirstId] = employee.responsibleFor;
  const { residents } = species.find((specie) => specie.id === specieFirstId);
  const { name, sex, age } = residents
    .reduce((prev, curr) => ((prev.age > curr.age) ? prev : curr));
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;

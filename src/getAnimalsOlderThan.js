const data = require('../data/zoo_data');

const { species } = data;

const getAnimalsOlderThan = (animal, ageExpected) => {
  const { residents } = species.find((specie) => specie.name === animal);
  return residents.every(({ age }) => age >= ageExpected);
};

module.exports = getAnimalsOlderThan;

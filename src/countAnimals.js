const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (animal) => {
  const obj = {};
  if (!animal) {
    species.forEach(({ name, residents }) => {
      obj[name] = residents.length;
    });
    return obj;
  }

  const animalFind = species.find(({ name }) => name === animal.specie);

  if (animal.specie && animal.sex) {
    return animalFind.residents.filter(({ sex }) => sex === animal.sex).length;
  }
  return animalFind.residents.length;
};

module.exports = countAnimals;

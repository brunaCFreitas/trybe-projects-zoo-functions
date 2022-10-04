const data = require('../data/zoo_data');

const { species } = data;

const aggregateByLocation = () => {
  const speciesByLocation = species.reduce((acc, specie) => {
    const { location } = specie;
    if (!acc[location]) {
      acc[location] = [];
    }
    acc[location].push(specie);
    return acc;
  }, {});

  return Object
    .entries(speciesByLocation)
    .map(([location, speciesList]) => ({
      location,
      speciesList,
    }));
};

const filterBySex = ({ sex }, expectedSex) => !expectedSex || sex === expectedSex;

const parseIncludeNames = ({ speciesByLocation, sorted = false, sex }) => speciesByLocation
  .reduce((acc, { location, speciesList }) => {
    acc[location] = speciesList.map(({ name: specieName, residents }) => {
      const residentNames = residents
        .filter((resident) => filterBySex(resident, sex))
        .map(({ name }) => name);
      if (sorted) {
        residentNames.sort((a, b) => a.localeCompare(b));
      }

      return {
        [specieName]: residentNames,
      };
    });
    return acc;
  }, {});

const parseAnimalsName = ({ speciesByLocation }) => speciesByLocation
  .reduce((acc, { location, speciesList }) => {
    acc[location] = speciesList.map(({ name }) => name);
    return acc;
  }, {});

const getAnimalMap = ({ includeNames, sorted, sex } = {}) => {
  const speciesByLocation = aggregateByLocation();
  if (!includeNames) {
    return parseAnimalsName({ speciesByLocation });
  }

  return parseIncludeNames({ speciesByLocation, sorted, sex });
};

module.exports = getAnimalMap;

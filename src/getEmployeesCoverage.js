const data = require('../data/zoo_data');

const { employees, species } = data;

const getSpeciesByIds = (ids) => {
  const animals = species.filter((specie) => ids.includes(specie.id));
  return animals.map((animal) => animal.name);
};

const getLocationByIds = (ids) => {
  const locationAnimals = species.filter((specie) => ids.includes(specie.id));
  return locationAnimals.map((locationAnimal) => locationAnimal.location);
};

const parseResponse = (employee) => ({
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: getSpeciesByIds(employee.responsibleFor),
  locations: getLocationByIds(employee.responsibleFor),
});

const getEmployeesByname = (obj) => {
  const { name } = obj;
  const employee = employees
    .find(({ firstName, lastName }) => firstName === name || lastName === name);
  if (!employee) {
    throw new Error('Informações inválidas');
  }
  return parseResponse(employee);
};

const getEmployeesById = (obj) => {
  const employee = employees.find(({ id }) => id === obj.id);
  if (!employee) {
    throw new Error('Informações inválidas');
  }
  return parseResponse(employee);
};

const getEmployeesCoverage = (obj) => {
  if (obj === undefined) {
    return employees.map((empl) => parseResponse(empl));
  }

  if (obj.name) {
    return getEmployeesByname(obj);
  }

  if (obj.id) {
    return getEmployeesById(obj);
  }
};

module.exports = getEmployeesCoverage;

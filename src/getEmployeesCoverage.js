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

const objReturn = (employeeSel) => ({
  id: employeeSel.id,
  fullName: `${employeeSel.firstName} ${employeeSel.lastName}`,
  species: getSpeciesByIds(employeeSel.responsibleFor),
  locations: getLocationByIds(employeeSel.responsibleFor),
});

const getEmployeesByname = (obj) => {
  const { name } = obj;
  const employeeSel = employees
    .find(({ firstName, lastName }) => firstName === name || lastName === name);
  if (!employeeSel) {
    throw new Error('Informações inválidas');
  }
  return objReturn(employeeSel);
};

const getEmployeesById = (obj) => {
  const employeeSel = employees.find((employee) => employee.id === obj.id);
  if (!employeeSel) {
    throw new Error('Informações inválidas');
  }
  return objReturn(employeeSel);
};

const getEmployeesCoverage = (obj) => {
  if (obj === undefined) {
    return employees.map((funcionario) => objReturn(funcionario));
  }

  if (obj.name) {
    return getEmployeesByname(obj);
  }

  if (obj.id) {
    return getEmployeesById(obj);
  }
};

module.exports = getEmployeesCoverage;

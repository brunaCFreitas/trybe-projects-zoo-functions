const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => employees.some(({ managers }) => managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const managersObj = employees.filter(({ managers }) => managers.includes(managerId));
  const managerList = [];
  managersObj.forEach(({ firstName, lastName }) => managerList.push(`${firstName} ${lastName}`));
  return managerList;
};

module.exports = { isManager, getRelatedEmployees };

const data = require('../data/zoo_data');

const { species, hours } = data;

const getAnimalsByDay = (day) => {
  const { open, close } = hours[day];
  if (open === 0 && close === 0) {
    return {
      [day]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  }
  const animalsList = species.filter((specie) => specie.availability.includes(day))
    .map((animal) => animal.name);
  return {
    [day]: {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: animalsList,
    },
  };
};

const getSchedule = (scheduleTarget) => {
  if (hours[scheduleTarget]) {
    return getAnimalsByDay(scheduleTarget);
  }
  const animal = species.find(({ name }) => name === scheduleTarget);
  if (animal) {
    return animal.availability;
  }
  return Object.keys(hours).reduce((acc, day) => {
    const result = getAnimalsByDay(day);
    return { ...acc, ...result };
  }, {});
};

module.exports = getSchedule;

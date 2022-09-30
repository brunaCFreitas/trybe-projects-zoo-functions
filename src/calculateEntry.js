const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const childrens = entrants.filter((entrant) => entrant.age < 18);
  const grownUp = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const old = entrants.filter((entrant) => entrant.age >= 50);
  return {
    child: childrens.length,
    adult: grownUp.length,
    senior: old.length,
  };
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }

  const objentrants = countEntrants(entrants);
  const { child, adult, senior } = objentrants;
  const value = (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
  return value;
}

console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };

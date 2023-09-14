const findTheOldest = function (arr) {
  let oldestAge = 0;

  const oldestPerson = arr.reduce((acc, person) => {
    const age = person.yearOfDeath
      ? person.yearOfDeath - person.yearOfBirth
      : new Date().getFullYear() - person.yearOfBirth;

    if (age > oldestAge) {
      oldestAge = age;
      acc = { ...person };
    }

    return acc;
  }, {});

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

const findTheOldest = function(people) {
    let oldest = null;
    let maxAge = 0;
    for (person of people) {
        let age = 0;
        if ('yearOfDeath' in person) {
            age = person['yearOfDeath'] - person['yearOfBirth'];
        } else {
            const currentDate = new Date();
            age = currentDate.getFullYear() - person['yearOfBirth'];
        }

        if (age > maxAge) {
            maxAge = age;
            oldest = person;
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

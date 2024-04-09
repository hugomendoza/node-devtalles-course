const getAge = require('get-age');

const getAgePlugin = (birthDate) => {
  if(!birthDate) return new Error('Birthdate is required');
  return getAge(birthDate);
}

module.exports = {
  getAgePlugin
}
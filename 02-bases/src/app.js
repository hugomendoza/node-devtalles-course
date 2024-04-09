// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } =require('./js-foundation/03-callback');
// const { getUserById } =require('./js-foundation/04-arrow');
// const { getAgePlugin } = require('./plugins/get-age.plugin');
// const crypto = require('crypto');
// const { buildMakePerson } = require('./js-foundation/05-factory');
// const getPokemonById = require('./js-foundation/06-promises')
// const { buildLogger } = require('./plugins')

// const logger = buildLogger('app.js')
// logger.log('Hola mundo')
// logger.error('Error')

// getPokemonById(1)
//   .then((pokemon) => console.log(pokemon))
//   .catch((error) => console.log('Pokemon not found'))
//   .finally(() => console.log('Finally'));

// const makePerson = buildMakePerson({ getAgePlugin, crypto})
// const obj = {
//   name: 'Hugo',
//   birthdate: '1985-03-03'
// }
// const person = makePerson(obj);

// console.table(person);


// const id = 2;

// getUserById(id, (error, user) => {
//   if (error) throw new Error( error )
//   console.table(user);
// })
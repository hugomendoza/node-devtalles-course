const buildMakePerson = ({ getAgePlugin, crypto }) => {
  return ({ name, birthdate }) => {
    return {
      id: crypto.randomUUID(),
      name,
      birthdate,
      age: getAgePlugin(birthdate)
    }
  }
}

module.exports = {
  buildMakePerson
}
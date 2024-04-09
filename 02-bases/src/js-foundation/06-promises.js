const { http } = require('../plugins')

// const getPokemonById = ( id ) => {
  
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  
//   return fetch(url)
//     .then((response) => response.json())
//     // .then(() => { throw new Error('Pokemon not found') })
//     .then((pokemon) => pokemon.name)
// } 


// const getPokemonById = async ( id ) => {
  
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`
//   const resp = await fetch(url)
//   const { name } = await resp.json()
//   return name
// } 

const getPokemonById = async ( id ) => {
  
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const { name } = await http.get(url)
    return name
  } catch (error) {
    throw `Pokemon not found with id: ${id}`
  }
} 

module.exports = getPokemonById
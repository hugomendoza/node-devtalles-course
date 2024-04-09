import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe('05-factory.ts', () => {

  const crypto = '1234'
  const getAgePlugin = () => 30
  
  test('buildMakePerson should return a function', () => {
    const makePerson = buildMakePerson({ crypto, getAgePlugin })
    expect(makePerson).toBeInstanceOf(Function)
    expect(typeof makePerson).toBe('function')
  })

  test('makePerson should return a person', () => {
    const makePerson = buildMakePerson({ crypto, getAgePlugin })
    const johnDoe = makePerson({ name: 'John Doe', birthdate: '1985-03-03' })
    expect(johnDoe).toEqual({
      id: '1234',
      name: 'John Doe',
      birthdate: '1985-03-03',
      age: 30
    })
  })
})
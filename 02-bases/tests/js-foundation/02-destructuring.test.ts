import { character } from "../../src/js-foundation/02-destructuring";

describe('02-destructuring.ts', () => {
  test('character should contain Goku, Vegeta', () => {
    expect(character).toContain('Goku')
    expect(character).toContain('Vegeta')
  });

  test('first should be Goku, second should be Vegeta', () => {
    const [ Goku, Vegeta ] = character
    expect(Goku).toBe('Goku')
    expect(Vegeta).toBe('Vegeta')

  })
})
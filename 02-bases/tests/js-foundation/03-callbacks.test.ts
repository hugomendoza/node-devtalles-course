import { getUserById } from "../../src/js-foundation/03-callback";

describe('03-callback.ts', () => {
  test('getUserById should return an error if user does not exist', (done) => {
    const id = 10
    getUserById(id, (err, user) => {
      expect(err).toBe(`USUARIO NO ENCONTRADO ${id}`)
      expect(user).toBeUndefined()
      done()
    })
  });

  test('getUserById should return Hugo Doe', (done) => {
    const id = 1
    getUserById(id, (err, user) => {
      expect(err).toBeUndefined()
      expect(user).toEqual({ id: 1, name: 'Hugo Doe' })
      done()
    })
  })
})
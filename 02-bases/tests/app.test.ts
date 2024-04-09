describe('Test in the App File', () => {
  test('should be 30', () => {
    // 1.arrange
    const num1 = 10;
    const num2 = 20;
    // 2.act
    const  result = num1 + num2;
    // 3.assert
    expect(result).toBe(30);
  })
})
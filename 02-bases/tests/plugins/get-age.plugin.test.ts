import { getAgePlugin } from "../../src/plugins/get-age.plugin";

describe('get-age.plugin.ts', () => {
  test('getAgePlugin() should return teh age of a person', () => {
    
    const birthdate = '1985-03-03';
    const age = getAgePlugin(birthdate);
    
    expect( typeof age ).toBe('number');
  })

  test('getAgePlugin() should return current age', () => {
    
    const birthdate = '1985-03-03';
    const age = getAgePlugin(birthdate);

    const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
    
    expect( age ).toBe(calculatedAge);
  })
})
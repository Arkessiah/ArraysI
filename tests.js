// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup('bdd');

// Establish variables for use in all tests
const { assert, expect } = chai;

describe('Test - Arrays I', () => {
  it('La variable alimentos debe contener "Lentejas", "Aguacate", "Tomate", "Hummus" y "Cebolla"', () => {
    expect(alimentos).to.deep.equal(["Lentejas", "Aguacate", "Tomate", "Hummus", "Cebolla"]);
  });
});

const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('A função deve retornar `undefined` caso não receba nenhum parâmetro', () => {
    const result = handlerElephants();
    expect(result).toBeUndefined();
  });

  it('Se o parâmetro da função não for uma string, esta deverá retornar uma mensagem de erro: `Parâmetro inválido, é necessário uma string`', () => {
    const result = handlerElephants(2);
    expect(result).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('A função deve retornar o valor do atributo, caso este atributo exista no animal Elephants', () => {
    const id = handlerElephants('id');
    const expectedId = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
    const name = handlerElephants('name');
    const expectedName = 'elephants';
    expect(id).toBe(expectedId);
    expect(name).toBe(expectedName);
  });

  it('A função ao receber o parâmetro `count` deverá retornar a quantidade de residentes da espécie elephants', () => {
    const count = handlerElephants('count');
    const expectedCount = 4;
    expect(count).toBe(expectedCount);
  });

  it('A função ao receber o parâmetro `names` deverá retornar um array com oa nomes dos elephants residentes', () => {
    const names = handlerElephants('names');
    const expectedNames = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(names).toEqual(expectedNames);
  });

  it('A função ao receber como parâmetro `averageAge` deverá retornar o calculo da média de idades dos elephants residentes', () => {
    const averageAge = handlerElephants('averageAge');
    const expectedAverageAge = 10.5;
    expect(averageAge).toBeCloseTo(expectedAverageAge);
  });

  it('A função ao receber um parâmetro diferente dos atributos de elephants e que não seja um dado computável deverá retornar null', () => {
    const notComputable = handlerElephants('Bruna');
    expect(notComputable).toBeNull();
  });
});

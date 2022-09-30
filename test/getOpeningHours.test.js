const getOpeningHours = require('../src/getOpeningHours');

const msgZooOpen = 'The zoo is open';
const msgZooClosed = 'The zoo is closed';

describe('Testes da função getOpeningHours', () => {
  it('A função quando não recebe nenhum argumento deverá retornar um objeto hours', () => {
    const expected = getOpeningHours();
    const hours = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(expected).toEqual(hours);
  });

  it('A função ao receber os argumentos `Monday` e `09:00-AM` deverá retornar a mensagem: `The zoo is closed`', () => {
    const msgMonday = getOpeningHours('Monday', '09:00-AM');
    expect(msgMonday).toBe(msgZooClosed);
  });

  it('A função ao receber os parâmetros `Tuesday` e `09:00-AM` deverá retornar a mensagem: `The zoo is open`', () => {
    const msgTuesday = getOpeningHours('Tuesday', '09:00-AM');
    expect(msgTuesday).toBe(msgZooOpen);
  });

  it('A função ao receber como parâmetro `Wednesday` e `09:00-PM` deverá retornar a mensagem: `The zoo is closed` ', () => {
    const msgWednesday = getOpeningHours('Wednesday', '09:00-PM');
    expect(msgWednesday).toBe(msgZooClosed);
  });

  it('A função ao receber como parâmetro um dia inválido deverá lançar uma exceção com a seguinte mensagem: `The day must be valid. Example: Monday`', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('A função ao receber os parâmetros `Friday` e `09:00-ZM` deve lançar uma exceção com a mensagem: `The abbreviation must be \'AM\' or \'PM\'`', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZN')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('A função ao receber os parâmetros `Saturday` e `C9:00-AM` deve lançar uma exceção com a mensagem: `The hour should represent a number`', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });

  it('A função ao receber os parâmetros `Sunday` e `09:c0-AM` deve lançar uma exceção com a mensagem: `The minutes should represent a number`', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });

  it('A função ao receber como parâmetro uma hora menor que 0 ou maior que 12 deverá lançar uma exceção com a seguinte mensagem: `The hour must be between 0 and 12`', () => {
    expect(() => getOpeningHours('Friday', '13:00-PM')).toThrow('The hour must be between 0 and 12');
  });

  it('A função ao receber como parâmetro os minutos com o valor menor ou igual a 0 ou maior ou igual a 59, deverá lançar uma exceção com a seguinte mensagem: `The minutes must be between 0 and 59`', () => {
    expect(() => getOpeningHours('Friday', '09:61-AM')).toThrow('The minutes must be between 0 and 59');
  });

  it('A função deverá saber interpretar a hora quando está tiver o valor igual a 12', () => {
    const msgZoo = getOpeningHours('Thursday', '12:00-PM');
    expect(msgZoo).toBe(msgZooOpen);
  });
});

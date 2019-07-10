<<<<<<< HEAD
/*
Desafio FizzBuzz
Escreva uma lib que receba um número e:
Se o número for divisível por 3, no lugar do número escreva 'Fizz' - X
Se o número for divisível por 5, no lugar do número escreva 'Buzz'
Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz'
Se não for múltiplo de nada, retorna o número
 */

import { expect } from 'chai';
import FizzBuzz from '../src/fizzbuzz';

describe('FizzBuzz', () => {

  it('should return `Fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(520)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
    expect(FizzBuzz(30)).to.be.equal('FizzBuzz');
  });

it('should return the number when non-multiple', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
  });

it('should return 0 when 0', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
=======
import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc', () => {

  // smoke tests
  describe('Smoke tests', () => {

    it('should exist the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a.function;
    });

    it('should exist the method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a.function;
    });

    it('should exist the method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a.function;
    });

    it('should exist the method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a.function;
    });

  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(6,2)`', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });

    it('should return -4 when `sub(6,10)`', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Mult', () => {
    it('should return 4 when `mult(2,2)`', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
>>>>>>> 36dc6e5773e01a74268108f942ee9bda631a1ed6
  });

  describe('Div', () => {
    it('should return 2 when `div(4,2)`', () => {
      expect(div(4, 2)).to.be.equal(2);
    });

    it('should return `Não é possível divisão por zero!` when divide by 0', () => {
      expect(div(4, 0)).to.be.equal('Não é possível divisão por zero!');
    });
  });
});

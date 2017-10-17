import {expect} from 'chai';

import * as kata from '../src/Livello1';

describe('Kata Livello 1', () => {
  it('should return a flat array', () => {
    expect(kata.flatten([1],[2, [[3]]])).to.deep.equal([1,2,3]);
  });
  it('should return a list within [1,2,3] with use two-args function', () => {
    expect(kata.esercizio1(1,3)).to.deep.equal([1,2,3]);
  });
  it('should return a list within [1,2,3] with use a curry function', () => {
    expect(kata.esercizio2(1)(3)).to.deep.equal([1,2,3]);
  });
  it('should return a list within [1,2,3,4,5]', () => {
    expect(kata.esercizio3(1,2,3,4,5)).to.deep.equal([1,2,3,4,5]);
  });
  it('should return a list within even numbers', () => {
    expect(kata.esercizio4(1,2,3,4,5,6,7,8,9,10)).to.deep.equal([2,4,6,8,10]);
  });
  it('should return a list within even numbers', () => {
    expect(kata.esercizio5(7,14,15,21,25,28,30,35,40,42,49,50)).to.deep.equal([7,14,21,28,35,42,49]);
  });
  it('should return a list within names starts by "C"', () => {
    expect(kata.esercizio6('Lorenzo','Carlo','Carmen','Rita')).to.deep.equal(['Carlo','Carmen']);
  });
  it('should return the mean from 0-100 by picking multiple by 8', () => {
    expect(kata.esercizio7(kata.esercizio2(1)(100))).to.equal(52);
  });
  it('should return the sum from 0-1000 by picking multiple by 6', () => {
    expect(kata.esercizio8(kata.esercizio2(1)(1000))).to.equal(83166);
  });
  it('should return a list of names sorted alphabetically', () => {
    expect(kata.esercizio9('Luca','Alberto','Vanessa','Carmen')).to.deep.equal(['Alberto','Carmen','Luca','Vanessa']);
  });
  it('should return the first element divisible by 41', () => {
    expect(kata.esercizio10(kata.esercizio2(100)(1000)) % 41).to.equal(0);
  })
});
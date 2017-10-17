import {expect} from 'chai';

import * as kata from '../src/Livello1';

describe('Kata Livello 1', function(){
  it('should return a flat array', function(){
    expect(kata.flatten([1],[2, [[3]]])).to.deep.equal([1,2,3]);
  });
});
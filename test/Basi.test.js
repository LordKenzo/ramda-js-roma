import {expect} from 'chai';

import * as basi from '../src/Basi';

const users = [
  {id:0, name:'Lorenzo'},
  {id:1, name:'Maurizio'},
  {id:2, name:'Eleonora'}
];

describe('Basi', () => {
  it('should be return a valid object', () => { 
    expect(users.find(basi.byId(2))).to.deep.equal({id:2, name:'Eleonora'})
  });
  it('should be return an object with id', () => {
    const user = {name:'Lorenzo'};
    expect(basi.addPropToObjInpure(user)).to.have.ownProperty('id');
    expect(user).to.deep.equal({id:0, name:'Lorenzo'})
  });
  it('should be return an object with id', () => {
    const user = {name:'Lorenzo'};
    expect(basi.addPropToObjPure(user)).to.have.ownProperty('id');
    expect(user).to.deep.equal({name:'Lorenzo'})
  });
  it('should be return a modified array', () =>{
    const array = [];
    expect(basi.addToArrayInpure(array)).to.deep.equal([{id:2}]);
    expect(array).to.deep.equal([{id:2}]);
  });
  it('should be return a unmodified array', () =>{
    const array = [];
    expect(basi.addToArrayPure(array)).to.deep.equal([{id:2}]);
    expect(array).to.deep.equal([]);
  });
});
// Function returnin other function alias Currying
export const byId = id => item => item.id === id;

// Function modify external arguments: inpure
export const addPropToObjInpure = obj => {
  obj.id = 0;
  return obj;
};

// Function return new object: pure
export const addPropToObjPure = obj => {
  return {
    ...obj,
    id: 0
  };
};

export const addToArrayInpure = array => {
  array.push({id:2}); 
  return array;
};

export const addToArrayPure = array => {
  return [
    ...array,
    {id: 2}
  ]
};
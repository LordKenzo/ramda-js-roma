import R from 'ramda';

export const flatten = (...arrays) => R.flatten(arrays);

export const esercizio1 = (min, max) => R.range(min, max + 1);

export const esercizio2 = (min) => (max) => R.range(min, max + 1);

export const esercizio3 = (...items) => 
  R.range(
    Math.min(...items.map(n => n)),
    Math.max(...items.map(n => n)) + 1
  );

export const esercizio4 = (...items) => R.filter( x => x % 2 === 0, items);

export const esercizio5 = (...items) => R.filter( x => x % 7 === 0, items);

export const esercizio6 = (...names) => R.filter( x => R.startsWith('C', x), names);

export const esercizio7 = (nums) => R.mean(R.filter(x => x % 8 === 0, nums));

export const esercizio8 = (nums) => R.sum(R.filter(x => x % 6 === 0, nums));

export const esercizio9 = (...nomi) => R.sort( (prec, succ) => prec > succ, nomi);

export const esercizio10 = (nums) => R.find(x => x % 41 === 0, nums);
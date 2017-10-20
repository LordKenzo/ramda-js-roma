# Functional Programming Kata with Ramda

This is a simple repo with incremental kata for learning `Functional Programming` with [Ramda Library](http://ramdajs.com/).
Please consider that this works is based on our meet up at [Lambda Garden Roma](https://github.com/CodeGardenRome/kata_zero_slide), more info on [Lambda Garden Roma Meetup](https://www.meetup.com/it-IT/Lambda-Roma/events/243702732/?_cookie-check=SBB6xDTeVkCNZT1z).

## Installation

Remember to installa node modules for dependency and run test:

```bash
npm install
npm run test
```

The `Mocha` test framework is included with `Babel` for transpile new Javascript features like spread operator.

## Why Functional Programming

Understand and use Functional Programming (FP) for:

- Open mind with a new trend programming paradigm, but old one [Alonzo Church](https://en.wikipedia.org/wiki/Alonzo_Church);
- Write What and not How;
- Be more clear with a code more readable;
- A readable code is a code maintainable;
- Learn about pure functions, immutable state and functions as first class citizen;
- Increase you code quality with functional programming within object programming;
- Write test code is easier than imperative code; 
- Be more confortable with library like Redux, with concept like High Order Functions, High Order Components and Composition.

> Learning Functional Programming takes a while, so don't be rude with yourself and be patient. And, yes, Functional Programming is not only use functions in your code. You always use functions in your code right now with OOP.

So you can study about FP with a mathematical approach or you can give a try to not formal documentation that fits for programmers like me :stuck_out_tongue_winking_eye:

## Why Ramda

## Why Immutable State

What is an Application? If you think for a moment, you can thought that an application is a succession of new state that evolve in time. The n-th state is composed of a complex structures like array of array within objects and other forms of data-structure.
The state is the core of our application and where bugs live in. More complex code involve more hidden anomalies, and when a state is changed by everyone, you can win a new bug.

## Functor

u.map(a => a) is equivalent to u (identity)
u.map(x => f(g(x))) is equivalent to u.map(g).map(f) (composition)

## Pure Functions

Pure Functions are functions that:
1. Receive data from external context and doesn't depend on any other data other than they receive as arguments;
2. They doesn't modify any data they receive;
3. They return always a new copy of what they do;
4. They return always the same result for the same input.

> A Pure Function return always a value

## Resources
(Fantasy Land)[https://github.com/fantasyland/fantasy-land]
(Immutable)[http://untangled.io/immutable-js-all-the-examples-youll-ever-need-to-get-set-and-delete-data-from-lists/]
(Immutable)[https://auth0.com/blog/intro-to-immutable-js/]
// For test purpose only

const Counter = require('./counter');

const counter = new Counter();

console.log(counter.count);
counter.increment();
console.log(counter.count);
counter.decrement();
console.log(counter.count);

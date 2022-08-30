//// Iterators ////
const dragons = ["cool dragon", "angry dragon", "greedy dragon"];

//for...of loops don't know anything about arrays.
//the array provides an iterator that tells the for...of loop how to iterate it

//symbols are like unique keys, we use them where we normally use a weird unique string to avoid conflict
Symbol.iterator; //? Symbol {}

const iterator = dragons[Symbol.iterator]();
iterator.next(); //? {value: 'cool dragon', done: false}
iterator.next(); //? {value: 'angry dragon', done: false}
iterator.next(); //? {value: 'greedy dragon', done: false}
iterator.next(); //? {value: undefined, done: false}
//this is what the iterator interface looks like. an object that the array spits out
//that tells things how to iterate over it

for (const char of dragons[0]) {
  char; //? c, o, o, l, , d, r, a, g, o, n, ....etc.
}

for (const dragon of dragons) {
  dragon;
}

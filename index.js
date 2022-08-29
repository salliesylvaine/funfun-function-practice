//// Iterators ////
const dragons = ["cool dragon", "angry dragon", "greedy dragon"];

//for...of loops don't know anything about arrays.
//the array provides an iterator that tells the for...of loop how to iterate it
const iterator = dragons[Symbol.iterator]()
iterator {[Iterator]}
for (const dragon of dragons) {
  dragon;
}


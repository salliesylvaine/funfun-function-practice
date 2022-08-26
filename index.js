//// Iterators ////
const dragons = ["cool dragon", "angry dragon", "greedy dragon"];

//for...of loops don't know anything about arrays.
//the array provides an iterator that tells the for...of loop how to iterate it
for (const dragon of dragons) {
  dragon;
}

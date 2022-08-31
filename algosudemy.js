//What is Big O Notation?
// a way of generalizing, comparing code and its performance to other code.

//why do we care?
// * it's important to have a precise vocabulary to talk about how our code performs.
// * useful for discussing trade-offs between different approaches
// * when your code slows down or crashes, identifying parts of the code that are inefficient can
// find pain points in our applications
// * less important: it comes up in interviews!

///// EXAMPLE /////

//Suppose we want to write a function that calculates the sum of all numbers from 1
// up to (and including) some number n.

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function altAddUpTo(n) {
  return (n * (n + 1)) / 2;
}

//which is better? what does better even mean?
// is it faster? less memory-intensive? more readable?

/// Evaluating Speed ///
//why not use timers?

let t1 = performance.now(); //performance.now() tells you the number of milliseconds since the document was created
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

//with this, the second function would be more efficient.
//the problem with time
// * different machines will records different times
// * the SAME machine will record different times
// * for fast algorithms, speed measurements may not be precise enough

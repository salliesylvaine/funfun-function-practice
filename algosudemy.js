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

//if not time, then what?
// rather than counting seconds, which are so variable, we can count the number of simple
// operations the computer has to perform!

/// Counting Operations ///
// altAddUpTo() has 3 operations that happen: 1 multiplication, 1 addition, and 1 division
// addUpTo() has n operations. n additions:
// * n assignments in (total += i)
// * n additions and  assignments in (i++)
// * 1 assignment in (let total = 0)
// * 1 assignment in (let i = 1)
// * n comparisons in (i <= n)

///// INTRO TO BIG O /////

// Big O allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

//we say that algorithm is O(f(n)) if the number of simple operations the computer has to do
// is eventually less than a constant times f(n), as n increases *f(n) = function with n as param (input of n)
// * f(n) could be linear (f(n) = n)
// * f(n) could be quadratic (f(n) = n * n) (n squared)
// * f(n) could be constant (f(n) = 1)
// * f(n) could be something entirely different!

//when we talk about Big O, we're talking about the worst case scenario

///// EXAMPLE /////
altAddUpTo(); //has a Big O of O(1) bc there are always 3 operations (constant)
addUpTo(); //number of operations is (eventually) bounded by a multiple of n (say, 10n)

function countUpAndDown(n) {
  console.log("Going Up!");
  for (let i = 0; i < n; i++) {
    //O(n)
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    //O(n)
    console.log(j);
  }
  console.log("Back down. Bye!");
}
// since we care about the big picture, countUpAndDown() has a Big O of O(n)

function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    //O(n)
    for (var j = 0; j < n; j++) {
      //O(n)
      console.log(i, j);
    }
  }
}
// bc of the nested loop, this is an O(n) operation inside of an O(n) operation, or O(n*n) n squared

///// SIMPLIFYING BIG O EXPRESSIONS /////

//when determining the time complexity of an algorithm, there are some helpful rules of thumb for big O expressions.

// * Constants don't matter
// O(2n) = O(n)
// O(500) = O(1)
// O(13n * n) = O(n * n) --squared

// * Smaller Terms Don't Matter
// O(n + 10) = O(n)
// O(1000n + 50) = O(n)
// O((n*n) + 5n + 8) = O(n*n) --squared

/// BIG O SHORTHANDS ///

// * arithmetic operations are constant
// * variable assignment is constant
// * accessing elements in an array (by index) or object (by key) is constant
// * in a loop, the complexity is the length of the loop times the complexity
// of whatever happens inside of the loop

///// EXAMPLE /////

function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    //O(n) bc as n grows, the number of operations grows
    console.log(i);
  }
}

function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    //O(1) bc the most it would run is 5 times. O(5) = O(1)
    console.log(i);
  }
}

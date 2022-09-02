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

///// SPACE COMPLEXITY /////

//we can also use big O notation to analyze space complexity: how much additional
// memory do we need to allocate in order to run the code in our algorithm?

//what about the inputs?
//auxiliary space complexity refers to space required by the algorithm, not including space taken
// up by the inputs. (unless otherwise noted, when we talk about space complexity, we'll technically
// be talking about auxiliary space complexity.)

/// Basic Rules ///
// * most primitives (booleans, numbers, undefined, null) are considered constant space
// * strings require O(n) space (where n is the string length)
// * reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

///// EXAMPLE /////

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
//there's only 2 variables declared, so no matter how long the array is, we're only dealing with those 2 constant variables.
// therefore, this would be O(1) space!

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
//bc we're storing the length of the original arr in the newArr, this would be O(n) space.

///// LOGARITHMS /////

// logarithms are inverses of exponentiation (exponents)

// log2(8)=3 ------> 2^3=8
// log2(value)=exponent --------> 2^exponent=value

//big picture is omitting the 2. log === log2

//basically, the logarithm of a number roughly measures the number of times
// you can divide that number by 2 before you get a value that's less than
// or equal to one

//log(8)=3 -----> 8 /2 = 4. 4/2 = 2. 2/2 = 1. divided 3 times.

///// LOGARITHM COMPLEXITY /////

//logarithm time complexity is great!
//who cares?
// * certain searching algorithms have logarithmic time complexity
// * efficient sorting algorithms involve logarithms
// * recursion sometimes involves logarithmic space complexity

/////// RECAP ///////

// * to analyze the performance of an algorithm, we use Big O Notation
// * Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
// * Big O Notation doesn't care about precision, only about the general trends (linear? quadratic? constant?)
// * The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used
// run the algorithm
// * Big O Notation is everywhere, so get lots of practice!

///// OBJECTS /////
// unordered data structures with key value pairs

let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

// when to use objects
// * when you don't need order
// * when you need fast access / insertion and removal

/// BIG O OF OBJECTS ///

// * Insertion - O(1)
// * Removal - O(1)
// * Searching - O(N)
// * Access - O(1)
//when you don't need any ordering, objects are an excellent choice!

/// BIG O OF OBJECT METHODS ///

// * Object.keys - O(N)
// * Object.values - O(N)
// * Object.entries - O(N)
// * hasOwnProperty - O(1)

///// ARRAYS /////

// they are ordered
let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];

//when to use arrays
// * when you need order
// * when you need fast access / insertion and removal (sort of)

/// BIG 0 OF ARRAYS ///

// * insertion - it depends
// * removal - it depends
// * searching - O(N)
// * access - O(1)

//insertion - if you insert a new element at the end of the array, it would be
// big O of O(1), constant time. inserting at the beginning, however, messes up
// the indices. we have to reindex every single element in the array, which takes time.
// this would be O(n) time since we have to do something roughly once for every element.
// the same goes for removing at the beginning. we have to reindex again.
// **** push and pop are always faster than shift and unshift.

// you don't need to know all of this....but...

/// BIG O OF ARRAY OPERATIONS ///
// * push - O(1) ----- adds onto end of array
// * pop - O(1) ----- removes from end of array
// * shift - O(N) ----- adds onto beginning of array
// * unshift - O(N) ----- removes from beginning of array
// * concat - O(N) ----- takes multiple arrays and merges them together
// * slice - O(N) ----- returns a copy of part of an array
// * splice - O(N) ----- removes and adds new elements (it's versatile)
// * sort - O(N * log N)
// * forEach/map/filter/reduce/etc - O(N) ----- loops/does something over each element

/// Main Takeaways of Objects and Arrays ///

// * objects are fast at everything, but there's no order
// * arrays are great when you need order, but it's better if you can add/remove from the end

///// ALGORITHMS AND PROBLEM SOLVING PATTERNS /////

//what is an algorithm?
// a process or set of steps to accomplish a certain task
// almost everything that you do in programming involves some kind of algorithm
// it's the foundation for being a successful problem solving and developer

//how do you improve?
// * devise a plan for solving problems
// * master common problem solving patterns

/// PROBLEM SOLVING STRATEGIES ///

// * understand the problem
// * explore concrete examples
// * break it down
// * solve/simplify
// * look back and refactor

/// UNDERSTANDING THE PROBLEM ///

// * Can I restate the problem in my own words?
// * What are the inputs that go into the problem?
// * What are the outputs that should come from the solution to the problem?
// * Can the outputs be determined from the inputs? In other words, do I have
// enough information to solve the problem? (You may not be able to answer this
// question until you set about solving the problem. That's okay; it's still worth
// considering the question at this early stage.)
// * How should I label the important pieces of data that are a part of the problem?

////// EXAMPLE //////
//Write a function which takes two numbers and returns their sum.

// * Can I restate the problem in my own words?
//implement addition
// * What are the inputs that go into the problem?
//- integers?
//-floats?
//-what about string for large numbers?
// * What are the outputs that should come from the solution to the problem?
//-integer? float? string?
// * Can the outputs be determined from the inputs? In other words, do I have enough info to solve the problem?
//yes for the most part, but what if someone only passes in one number? return null? undefined? you can clarify with interviewer
// * How should I label the important pieces of data that are a part of the problem?
//maybe name function "add", then num1 and num2, and answer is sum

/// EXPLORING EXAMPLES ///

// * coming up with concrete examples can help you understand the problem better
// * examples also provide sanity checks that your eventual solution works how it should
//user stories!   unit tests!

// * start with simple examples
// * progress to more complex examples
// * explore examples with empty inputs
// * explore examples with invalid inputs

///// EXAMPLE /////
//Write a function which takes in a string and returns counts of each character in the string.

// charCount("aaaa"): {a:4}
// charCount("hello"): {h:1, e:1, l:2, o:1} this raises the question of  "does it need to return all letters regardless or just the letters in the string?"
// "my phone number is 1284437" should spaces be counted? what about numbers?
// "Hello hi" uppercase vs lowercase? do they count as the same letter or different?
// charCount("") what do we want to return if someone inputs an empty string?
// what happens if someone passes in something that isn't a string?

/// BREAK IT DOWN ///

// * explicitly write out the steps you need to take.
// this forces you to think about the code you'll write before you write it, and helps you catch
// any lingering conceptual issues or misunderstandings before you dive in and have to worry about
// details (e.g. language syntax) as well. this also shows the interviewer how you think, how you
// go about problem solving, etc. instead of you standing there silently.

///// EXAMPLE /////
//Write a function which takes in a string and returns counts of each character in the string.

function charCount(str) {
  //do something
  //return an object with keys that are lowercase alphanumeric characters in the string;
  //values should be the counts for those characters
}

function charCount(str) {
  // make object to return at end
  // loop over string, for each character...
  //if the char is a number/letter AND is a key in object, add one to count
  //if the char is a number/letter AND not in object, add it and set value to 1
  //if character is something else (space, period, etc.) don't do anything
  // return object at end
}

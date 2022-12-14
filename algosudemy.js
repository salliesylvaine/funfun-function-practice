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

/// SOLVE THE PROBLEM ///
// or solve a simpler problem //

/// SIMPLIFY ///
// * find the core difficulty in what you're trying to do
// * temporarily ignore that difficulty
// * write a simplified solution
// * then incorporate that difficulty

///// EXAMPLE /////
//Write a function which takes in a string and returns counts of each character in the string.

function charCount(str) {
  // make object to return at end
  var result = {};
  // loop over string, for each character...
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    //if the char is a number/letter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    }
    //if the char is a number/letter AND not in object, add it and set value to 1
    else {
      result[char] = 1;
    }
  }

  //if character is something else (space, period, etc.) don't do anything
  // return object at end
  return result;
}

// output:
// charCount('hello')
//{h: 1, e: 1, l: 2, o: 1}

//charCount('Hi there!')
// {H: 1, i: 1, " ": 1, t: 1, h: 1, ???}
// " ": 1
// !: 1
// H: 1
// e: 2
// h: 1
// i: 1
// r: 1
// t: 1

// adding .toLowerCase()
// charCount("Hi there!")
// {h: 2, i: 1, " ": 1, t: 1, e: 2, ???}
// " ": 1
// !: 1
// e: 2
// h: 2
// i: 1
// r: 1
// t: 1

/// LOOK BACK AND REFACTOR ///

// Refactoring Questions //
// * Can you check the result?
// (make sure the code works)

// * Can you derive the result differently?
// (can you think about different approaches?)

// * Can you understand it at a glance?
// (how intuitive is your solution?)

// * Can you use the result or method for some other problem?
// (are there any similarities between this problem and other problems you've seen in the past )

// * Can you improve the performance of your solution?
// (how to make it perform better, think time or space complexity)

// * Can you think of other ways to refactor?
// (does your code follow conventions of the language? is spacing consist? company guidelines? )

// * How have other people solved this problem?
// (often the interviewers will ask the same question. pick their brain and learn)

// it's often a good idea to ask these questions out loud, to yourself or the interviewer.

///// EXAMPLE /////
function charCount(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

// you can use a for...of loop to simplify. if we do for...of on a string, it gives us each character immediately
function charCount(str) {
  var obj = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

// you can also simplify the if..else statement to a single line
function charCount(str) {
  var obj = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
      // if obj[char] is truthy, set it equal to ++obj[char]
      //if falsy, set it to 1;
    }
  }
  return obj;
}

//while you might not think of this in an interview, this is another way that you could refactor
function charCount(str) {
  var obj = {};
  for (var char of str) {
    // for each character of our string
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && //numeric (0-9)
    !(code > 64 && code < 91) && //upper alpha (A-Z)
    !(code > 96 && code < 123)
  ) {
    // lower alpha (a-z)
    return false;
  }
  return true;
}
// it's apparently more efficient to use character codes

///// HOW DO YOU IMPROVE? /////
// * Devise a plan for solving problems
// * Mastering common problem solving patterns

/// Some pattern examples
// * Frequency Counter
// * Multiple pointers
// * Sliding window
// * divide and conquer
// * dynamic programming
// * greedy algorithms
// * backtracking
// * and many more!!!!

/// FREQUENCY COUNTERS ///

//This pattern uses objects or sets to collect values/frequencies of values.
//This can often avoid the need for nested loops or O(N^2) operations with arrays/strings

/// EXAMPLE
//Write a function called same, which accepts two arrays. The function should return true if every value in the
//array has its corresponding value squared in the second array. The frequency of values
//must be the same.

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

//my attempt
function same(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] * arr1[i] === arr2[i]) {
      return true;
    } else {
      return false;
    }
  }
}
//not correct, [1,2,3] [9,1,4] returned false instead of true

//his solution (a naive solution)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false; //we know that if the arrays are different lengths from the get go, we're done
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2); //what is the index of 1 squared in array2?

    if (correctIndex === -1) {
      //an index of -1 would mean it's not in there
      return false;
    }
    arr2.splice(correctIndex, 1); //remove the matching ones so you don't count something twice
  }
  return true; //if you make it this far without hitting false, return true
}
// time complexity = O(N^2)

//REFACTORED SOLUTION
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false; //we know that if the arrays are different lengths from the get go, we're done
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    // loops over arr, for each val in arr1, add 1 to frequencyCounter1 if it's already in there, otherwise initialize to 1
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      // is 2^2 a key in our second object?
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false; //then do the values match?
    }
  }
  return true;
}
// time complexity O(n)

/// ANAGRAMS ///

//Given two strings, write a function to determine if the second string is an anagram of the first.
//An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema
//formed from iceman.

//his solution

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    //if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    //can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

/// MULTIPLE POINTERS ///

// Creating pointers or values that correspond to an index or position
//and move towards the beginning, end, or middle based on a certain condition
//VERY efficient for solving problems with minimal space complexity as well

/// EXAMPLE
//Write a function called sumZero which accepts a sorted array of integers. the function should
//find the first pair where the sum is 0. Return an array that includes both values
//that sum to zero or undefined if a pair does not exist.

//Naive solution
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
// time complexity = O(N^2)
// space complexity - O(1)

//Refactored Solution with 2 pointers
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
//time complexity = O(n)
//space complexity = O(1)

//Implement a function called countUniqueValues, which accepts a sorted array,
//and counts the unique values in the array. There can be negative numbers
//in the array, but it will always be sorted.

//my *incorrect* solution
function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] !== arr[i]) {
        arr[i] = arr[j];
        count++;
      }
    }
  }
  return count;
}

//his solution (you were close!)
function countUniqueValues(arr) {
  var i = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

/// SLIDING WINDOW ///

//This pattern involves creating a window which can either be an array or number
// from one position to another. Depending on a certain condition, the
// window either increases or closes (and a new window is created).
// Very useful for keeping track of a subset of data in an array/string etc.

/// EXAMPLE ///
//Write a function called maxSubarraySum which accepts an array of integers
//and a number called n. The function should calculate the maximum sum of n
//consecutive elements in the array.

//naive solution
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity; //this includes the sum if all the numbers are negative
  for (let i = 0; i < arr.length - num + 1; i++) {
    //this prevents us from going past the last digit
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
//time complexity O(N^2), the nested loop makes this really inefficient
//(you can say n^2 anytime there's a nested loop)

//Refactored with Sliding Window
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) {
    return null;
  }

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]; //creates the first sum
  }
  tempSum = maxSum; //
  for (let i = num; i < arr.length; i++) {
    //this starts after the initial group being added
    tempSum = tempSum - arr[i - num] + arr[i]; //this adds the next number and subtracts the first number
    maxSum = Math.max(maxSum, tempSum); //this is the same as our if statement in the previous function: if temp > max, max = temp
  }
  return maxSum;
}
//this creates an initial sum, and then subtracts the first number and adds the new number,
//instead of recalculating everything we've already done. only loops over the array one time
//time complexity O(N)

/// DIVIDE AND CONQUER ///

//This pattern involves diving a data set into smaller chunks and then repeating
//a process with a subset of data.
//This pattern can tremendously decrease time complexity

/// EXAMPLE ///
//Given a sorted array of integers, write a function called search, that accepts a value and returns the index where
//the value passed to the function is located. If the value is not found, return -1.

//naive solution (linear search/time complexity O(N))
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

//refactored solution (time complexity - log(N)-Binary search!)
function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

///// RECURSION /////

// 2 ways to solve problems: iterative and recursive

// recursion is taking a problem, and doing it over and over on a smaller
// or changing piece until you hit an endpoint, or base case.

/// OBJECTIVES ///
// * define what recursion is and how it can be used
// * understand the two essential components of a recursive function
// * visualize the call stack to better debug and understand recursive functions
// * use helper method recursion and pure recursion to solve more difficult problems

// What is recursion?
//A process (a function in our case) that calls itself.

// Why do I care?
//It's everywhere!
// * JSON.parse/JSON.stringify
// * document.getELementById and DOM traversal algos
// * object traversal
// * we will see it with more complex data structures
// * it's sometimes a cleaner alternative to iteration

// But first, let's talk about functions!
// In almost all program languages, there is a built in data structure that
// manages what happens when functions are invoked.

/// THE CALL STACK ///
// * It's a stack data structure - we'll talk about that later.
// * Any time a function is invoked, it is placed (pushed) on the top
//of the call stack.
// * When JavaScript sees the return keyword or when the function ends, the compiler
//will remove (pop)

// Why do I care?
//You're used to functions being pushed on the call stack and popped off when they
//are done.
//When we write recursive functions, we keep pushing new functions onto the call stack!

/// How Recursive Functions Work! ///

//Invoke the same function with a different input until you reach your base case

/// BASE CASE
//The condition when the recursion ends.
//THIS IS THE MOST IMPORTANT CONCEPT TO UNDERSTAND

// Two essential parts of a recursive function!
// * Base Case
// * Different input

// Our first recursive function example
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
//countDown(3)
//print 3
//countDown(2);
//print 2
//countDown(1)
//print 1
//countDown(0)
//"All done!"
//return stops the function

//Iterative version
function countDown(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
}

// Our second recursive function example
function sumRange(num) {
  if (num === 1) {
    //base case
    return 1;
  }
  return num + sumRange(num - 1); //recursive call
}

//ex: sumRange(3)
//return 3 + sumRange(2)
///////////// return 2 + sumRange(1)
//////////////////////////return 1;

//this returns 6 bc 3 + 2 + 1 = 6

//factorial iterative solution
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

//factorial recursive solution
function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

/// PITFALLS OF RECURSIVE SOLUTIONS ///
// * no base case, or base case is wrong
// * forgetting to return or returning the wrong thing
// * stack overflow!

///// HELPER METHOD RECURSION /////

//a pattern where we have an outer function that's not recursive which calls an inner function that is recursive

function outer(input) {
  var outerScopedVariable = [];

  function helper(helperInput) {
    //modify the outerScoperVariable
    helper(helperInput--);
  }
  helper(input);

  return outerScopedVariable;
}
//done when we need to compile an array or list of data.

//EXAMPLE//

function collectOddValues(arr) {
  let result = []; //if this was a regular recursive function, anytime the function ran, the array would be reset to empty, so we couldn't store our data there.

  function helper(helperInput) {
    //pass in the array
    if (helperInput.length === 0) {
      //base case
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      //if it's not divisible by 2, it's odd, push into result
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1)); // makes smaller array without first element
  }
  helper(arr);

  return result;
}

/// PURE RECURSION ///
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length == 0) {
    //base case
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    //check if first element is odd
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  return newArr;
}

//collectOddValues([1,2,3,4,5]); this would make it:
// [1].concat(collectOddValues([2,3,4,5]))
///////////////// [].concat(collectOddValues([3,4,5]))
/////////////////////////////// [3].concat(collectOddValues([4,5]))
////////////////////////////////////////////// [].concat(collectOddValues([5]))
/////////////////////////////////////////////////////////// [5].concat(collectOddValues([]))
/////////////////////////////////////////////////////////////////////////// returns empty []

// BUT! concat, working backwards, returns[1,3,5]
// [5].concat([]) = [5]
// [].concat([5]) =  [5]
// [3].concat([5]) = [3,5]
// [].concat([3,5]) = [3,5]
// [1].concat([3,5]) = [1,3,5]

/// PURE RECURSION TIPS ///
// * For arrays, use methods like slice, the spread operator, and concat
// that make copies of arrays so you do not mutate them
// * Remember that strings are immutable so you will need to use methods
// like slice, substr, or substring to make copies of strings
// * To make copies of objects use Object.assign, or the spread operator

/// RECURSION PRACTICE ///

// my answer (incorrect)
function power(base, exp) {
  let answer;
  if (exp === 0) {
    return 1;
  }

  for (let i = exp; i > 0; i--) {
    answer = base * base;
    power(answer, exp);
  }

  return answer;
}

//correct answer
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

//factorial - my answer (CORRECT!!)
function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

//productOfArray - my answer (correct, with looking at example)
function productOfArray(arr) {
  let answer = 1;

  function helper(helperArr) {
    if (helperArr.length === 0) {
      return;
    }
    answer = answer * helperArr[0];

    helper(helperArr.slice(1));
  }

  helper(arr);

  return answer;
}

//recursiveRange - my answer (correct!!!!)
function recursiveRange(num) {
  let answer = num;

  if (num === 0) {
    return answer;
  }

  answer = answer + recursiveRange(num - 1);
  return answer;
}

// fibonacci - didn't answer, so the solution
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

///CHALLENGING RECURSIVE PRACTICE ///

//reverse - my solution (incorrect)
function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  let arr = str.split();

  let answer = [];

  if (arr.length === 0) {
    return answer.toString();
  }

  answer.push(arr[arr.length]);

  arr.slice(1);

  return reverse(answer.toString());
}

//correct solution
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

///// SEARCHING ALGORITHMS /////

/// OBJECTIVES ///
// * describe what a searching algorithm is
// * implement linear search on arrays
// * implement binary search on sorted arrays
// * implement a naive string searching algorithm
// * implement the KMP string searching algorithm

/// LINEAR SEARCH ///

//How do we search?

//given an array, the simplest way to search for a value is to
//look at every element in the array and check if it's the value we want.
// congrats! that's linear search.

// JavaScript has search!
// There are many different search methods on arrays in JavaScript:
// * indexOf
// * includes
// * find
// * findIndex

//But how do these functions work?
// they're doing linear search

//Linear Search Pseudocode
// * this function accepts an array and a value
// * loop through the array and check if the current array element is equal to the value
// * if it is, return the index at which the element is found
// * if the value is never found, return -1
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
//Big O - O(n)

// How linear search performs

// O(1) - Best case
// O(n) - Average case
// O(n) - Worst case

/// INTRO TO BINARY SEARCH ///

// * binary search is a much faster form of search
// * rather than eliminating one element at a time, you can eliminate HALF of the remaining elements at a time
// * binary search only works on SORTED arrays

/// Divide and Conquer ///

// Let's search for 15:
[1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19];
//left (1)        too small (11)           right (19)
[1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19];
//               left (12)    too big (17)  right (19)
[1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19];
//            left (12)  middle (15) right (16)
//this only took 3 guesses

/// Binary Search Pseudocode
// * this function accepts a sorted array and a value
// * create a left pointer at the start of the array, and a right pointer
// at the end of the array
// * while the left pointer comes before the right pointer:
//    * create a pointer in the middle
//    * if you find the value you want, return the index
//    * if the value is too small, move the left pointer up
//    * if the value us too large, move the right pointer down
// * if you never find the value, return -1

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;

  //refactor:
  //return arr[middle] === elem ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15);

/// Big O for Binary Search ///

// Worst Case - O(log n) (still really good)
// Best Case - O(1)

/// NAIVE STRING SEARCH ///
// * suppose you want to count the number of times a smaller
// string appears in a longer string
// * a straightforward approach involves checking pairs of characters
// individually

/// Pseudocode ///
// * loop over the longer string
// * loop over the shorter string (nested loop inside the longer string loop)
// * if the characters don't match, break out of the inner loop
// * if you complete the inner loop and find a match, increment
// the count of matches
// * return the count

function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

naiveSearch("lorie loled", "lol");

///// ELEMENTARY SORTING ALGORITHMS /////

/// What is sorting? ///

// Sorting is the process of rearranging the items in a collection
// (eg. an array) so that the items are in some kind of order.
//    Ex:
//      - sorting numbers from smallest to largest
//      - sorting names alphabetically
//      - sorting movies based on release year
//      - sorting movies based on revenue

/// Why do we need to learn this? ///

// Sorting is an incredibly common task, so it's good to know how it works
// There are many different ways to sort things, and different techniques have their own
//advantages and disadvantages

/// JavaScript Sort Method ///

// The JavaScript sort method works, but not in the way you expect.

// EX:
["steele", "colt", "data structures", "algorithms"].sort();
// ['algorithms', 'colt', 'data structures', 'steele']

[6, 4, 15, 10].sort();
// [10, 15, 4, 6]

// According to docs, the default sort order is according to string Unicode
// code points.

/// Telling JavaScript how to sort ///

// The built-in sort method accepts an optional comparator function
// You can use this comparator function to tell JavaScript how you want it to sort
// The comparator looks at pairs of elements (a and b), determines their sort order
// based on the return value
//      If it returns a negative number, a should come before b
//      If it returns a positive number, a should come after b.
//      If it returns 0, a and b are the same as far as the sort is concerned

//EX:
function numberCompare(num1, num2) {
  return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare);
// [4, 6, 10, 15]

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen);

/// BUBBLE SORT ///

// A sorting algorithm where the largest values bubble up to the top!
// Basically, you compare an item to the item next to it. If the item next to it is larger, you swap them.
// the largest items "bubble" to the top.

// Before we sort, we must swap!
// Many sorting algorithms involve some type of swapping functionality (e.g. swapping to
// numbers to put them in order)

// EX: (ES5)
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
// (ES2015)
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

/// BubbleSort Pseudocode ///
// * Start looping with a variable called i from the end of the array
// towards the beginning
// * Start an inner loop with a variable called j from the beginning until i - 1
// * If arr[j] is greater than arr [j + 1], swap those two values!
// * Return the sorted array

// NAIVE SOLUTION
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

bubbleSort([37, 45, 29, 8]);

// REFACTORED SOLUTION
function bubbleSort(arr) {
  for (let i = arr.length; i < 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// EVEN NICE SOLUTION APPARENTLY
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

/// BUBBLE SORT OPTIMIZATION ///
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i < 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break; // this stops the code from running after everything is sorted
  }
  return arr;
}

//daily commit

// daily commit

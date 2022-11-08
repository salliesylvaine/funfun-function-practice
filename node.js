/// What is Node.js? ///

// allows developers to use JavaScript on the server side (instead of being forced to run it on the client)

// Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. The point of the engine is to take JS code
// and compile it down to machine code that your machine can execute.
// The runtime is something that provides custom functionality (tools and libraries)

/// Why Node.js? ///

// Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

// Blocking vs. Non-Blocking //

// Blocking example:
const getUserSync = require("./src/getUserSync");

const userOne = getUserSync(1);
console.log(userOne);

const userTwo = getUserSync(2);
console.log(userTwo);

const sum = 1 + 33;
console.log(sum);
// the most time consuming part of this is waiting for the fetch user to return.
//each action waits for the previous action to finish before it starts.

// Non-blocking example:
const getUser = require("./src/getUser");

getUser(1, (user) => {
  console.log(user);
});

getUser(2, (user) => {
  console.log(user);
});

const sum = 1 + 33;
console.log(sum);
// starting the fetch of users can happen almost instantaneously.
// by passing in a callback function, we're telling it to call the callback when
// we get the response we were hoping for sometime in the future.
// this allows us to complete the same actions in half the time.

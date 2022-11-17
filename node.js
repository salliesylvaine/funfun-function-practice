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

// Node.js' package ecosystem, npm, is the largest ecosystem for open source libraries in the world.

///// APP.JS NOTES/CHALLENGES /////

// const fs = require("fs");

// // fs.writeFileSync("notes.txt", "My name is Sallie.");

// fs.appendFileSync("notes.txt", " This is an appended message.");

// // Challenge: Append a message to notes.txt
// //
// // 1. Use appendFileSync to append the file
// // 2. Run the script
// // 3. Check your work by opening the file and viewing the appended text

// const add = require("./utils.js");

// const sum = add(4, -2);
// console.log(sum);

//
// Challenge: Define and use a function in a new files
//
// 1. Create a new file called called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing message to console

const getNotes = require("./notes");

const notes = getNotes();

console.log(notes);

///// CHALK AND YARGS NOTES /////
// const notes = getNotes();

// console.log(notes);

// console.log(chalk.green("Success!"));

// console.log(chalk.bgMagenta("Magenta"));

// console.log(chalk.bgBlueBright("Test"));

// const error = chalk.inverse.bgMagenta;

// console.log(error("you failed"));

// console.log(chalk.blue.bold("Hello world!"));

// console.log(process.argv[2]);

// const command = process.argv[2];

// console.log(process.argv);

// if (command === "add") {
//   console.log("Adding note!");
// } else if (command === "remove") {
//   console.log("Removing note!");
// }

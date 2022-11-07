/////  REACT CONCEPTS /////

// 1. Don't touch the DOM, I'll do it.
//     -Document Object Model, what the browser uses to display a web app.
//     JS just manipulates the DOM. It's a tree representation of the page.
// 2. Building websites like lego blocks.
//     -Components!! are Javascript functions created from the state data. It's a function that receives attributes,
//      called props, and returns html that's inside javascript (JSX)
// 3. Unidirectional Data Flow
//     -React library is basically a function that we pass in state and components, and it creates a virtual DOM (a javascript version of the DOM)
//     -VirtualDOM is a tree-like object that gives React a blueprint of how it should update the actual DOM.
//     -Anytime we want something to change on the webpage, the state (data) has to update. React then "reacts" to the change of state
//      and updates the DOM.
//     -One way data flow: by having this restriction, it's really easy to debug code.

/// Declarative vs Imperative ///

// In an Imperative Paradigm, you directly change individual parts of your app in response to various user events.
// hard to debug

// In Declarative paradigm, react gets a blueprint in the form of a javascript object of how the page should look,
// then react finds the best way to manipulate the DOM. In essence, we declare what the state should be like, and then just make changes
// based on state.
// less complexity, better code quality, faster developer times

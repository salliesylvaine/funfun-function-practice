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

/// The Job of a React Developer ///

// 1. Decide on Components
// 2. Decide the State and where it lives
// 3. What changes when state changes

/// Classes vs Hooks ///

// Tells react when you want it to render and re-render different parts of your website

////// Monsters Roledex Notes //////
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Hi {this.state.name.firstName} {this.state.name.lastName}, I work at{" "}
    {this.state.company}
  </p>
  <button
    onClick={() => {
      this.setState(
        (state, props) => {
          return {
            name: { firstName: "Yihua", lastName: "Zhang" },
          };
        },
        () => {
          console.log(this.state); //this runs only after the above state is updated
        }
      );

      // this.setState({
      //   name: { firstName: "Yihua", lastName: "Zhang" },
      // }); //this is asynchronous
      // console.log(this.state) //this is synchronous, so it may not show the changes in state yet bc they may not have happened yet
    }}
  >
    Change Name
  </button>
</header>;

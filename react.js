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

///// REACT/JAVASCRIPT CONCEPTS OVERVIEW /////

/// ARRAY METHODS ///

//methods you can call on any array that will perform some kind of action on or with that array

map();
// goes through each element of an array and does something (whatever you tell it to) to each element,
// returning a new array.

filter();
// filters out elements in the array based on the function that you pass it.
// returns a new array

reduce();

find();

includes();
// returns a true/false value based on the arguments you pass in.
// i.e. if array includes the argument, it returns true. otherwise false.

///// PROMISES /////
const myPromise = new Promise((resolve, reject) => {
  //resolve is when API is successful, reject is when API call gives an error
  //the promise will be pending until the resolve or reject has been called
  if (true) {
    setTimeout(() => {
      resolve("I have succeeded");
    }, 1000); //wants setTimeout to run in 1000 milliseconds
  } else {
    reject("I have failed");
  }
});

myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((rejectValue) => console.log(rejectValue));

///// MONSTER ROLODEX NOTES /////
class App extends Component {
  constructor() {
    // 1. classes always run constructor function first (it initializes state)
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    // 3. runs as soon as component is mounted
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }, //when state changes, the component will re-render, repeating step 2
          () => {
            console.log(this.state);
          }
        )
      );
  } // mounting is when react first renders the component to the DOM

  render() {
    // 2. render determines what to show (dictates what UI is going to be), mounts component
    console.log("render");

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            //bc this is an anon function not stored in a variable, it is initialized when the render method runs, and is deleted once it's done running.
            // so, it gets recreated every single time render runs, meaning there's nowhere in memory keeping track of the function
            const searchField = event.target.value.toLocaleLowerCase();

            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

///// COMPONENT LIFECYCLES /////

// Mounting :
//    constructor, render, react updates DOM and refs
//    componentDidMount

// Updating :
//    render (new props, setState(), forceUpdate()*this is there if you need it, but you should rely on react and not try to force an update)
//    react updates DOM and refs
//    componentDidUpdate

// Unmounting :
//    componentWillUnmount

// ** These are unique to class components, functional components don't have these lifecycle methods,
//  but they do still follow these same 3 phases of components. You just don't interact with them.

/// Render Phase : Pure and has no side effects. May be paused, aborted, or restarted by React.
//    constructor, render (new props, setState(), forceUpdate())

/// Commit Phase : Can work with DOM, run side effects, schedule updates.
//    react updates DOM and refs, componentDidMount, componentDidUpdate, componentWillUnmount

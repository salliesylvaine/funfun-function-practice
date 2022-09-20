///// "EVERYTHING IN JS IS AN OBJECT" /////

// Objects in JS are quite like objects in real life
// They have properties and things they can do (methods)

var names = ['ryu', 'crystal', 'mario']

//technically, names will come back as an array that is an object
['ryu', 'crystal', 'mario']
0: 'ryu'
1: 'crystal'
2: 'mario'
length: 3
//if you called names.length, you would get 3

///// OBJECT LITERALS /////

var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    // login: function(){}
    login(){ //ES6 lets you bypass the function keyword
        console.log(this.email, 'has logged in') // 'this' refers to the object when it's in said object
    },
    logout(){
        console.log(this.email, 'has logged out')
    }
};
this //when outside of an object, 'this' refers to the window object, or global object

//What we're doing is ENCAPSULATION, we're capturing everything to do with
//the user, and we're containing it in one piece, or object. We're encapsulating 
//what it means to be this user inside an object. Now, any properties and methods that
//describe what it is to be this user will live inside this object.

console.log(userOne.name); // 'Ryu'
console.log(userOne.login()); // 'ryu@ninjas.com has logged in'

userOne.name = 'Yoshi'; //changes value of name property to "Yoshi" using dot notation
userOne.name = 'Ryu'; //changes it back to 'Ryu'

//You can also use bracket notation
userOne['email'] // property name must be in a string, output is 'ryu@ninjas.com'

userOne['name'] = 'mario'; //also works for updating property values

//Using the bracket notation is useful when properties are dynamic and not set in stone

var prop = 'name';
userOne[prop]; // output: 'mario'. it finds the name property in the object

prop = 'email';
userOne[prop]; // now output: 'ryu@ninjas.com', bc the value of the prop variable changed

userOne.prop // would not work bc this is looking for the "prop" property in the object, and that doesn't exist

//You can also create properties within an object using dot notation

userOne.age = 25; //creates "age" property on that user
//this also works for methods
userOne.logInfo = function(){};
//netNinja hot take is that we should stay away from this and should keep properties and methods within the object literal
//but that's not a rule, this might be useful sometimes and you can use it if you want to

var userTwo = {
    email: 'yoshi@ninjas.com',
    name: 'yoshi',
    // login: function(){}
    login(){ //ES6 lets you bypass the function keyword
        console.log(this.email, 'has logged in') // 'this' refers to the object when it's in said object
    },
    logout(){
        console.log(this.email, 'has logged out')
    }
};

var userThree = {
    email: 'mario@ninjas.com',
    name: 'mario',
    // login: function(){}
    login(){ //ES6 lets you bypass the function keyword
        console.log(this.email, 'has logged in') // 'this' refers to the object when it's in said object
    },
    logout(){
        console.log(this.email, 'has logged out')
    }
};

//this is getting out of hand and we're having to write the same properties over and over

///// CLASSES /////

// What if we wanted more than one user object without having to repeat ourselves?
//JavaScript doesn't technically have classes built into it. But ES6 released class syntactical sugar that emulates the idea of classes in JS
var userFour = new User();

//Classes in JS are like blueprints that describe a particular object in a nonspecific way

//Car Class has a color property
//Each child Car has a color property inherited from Car with their own specific color

//the child classes are different INSTANCES of the parent classes, meaning they have the same
//properties, but their own values for those properties that are unique to them

//Let's create a User class!
class User {
    constructor(email, name) {
        this.email = email; //so we don't hardcode info in, we'll take the values as arguments
        this.name = name;
        this.score = 0;//not passed in as param bc all scores default to 0
    } //constructor function is just for object properties
    login(){
        console.log(this.email, 'just logged in')
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out')
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score)
        return this; //returning that instance of the object (that particular user)
    }
}
//First step: create a constructor function. A constructor function constructs, or creates, our objects.
//the constructor function will be what creates the new object when we call "new user"
// * 'this' inside the constructor function will be the 'this' of the new object we create


var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
// the 'new' keyword:
// * creates a new empty object {}
// * sets the value of 'this' to be the new empty object
// * calls the constructor method


console.log(userOne); // User {email: 'ryu@ninjas.com', name: 'Ryu'}
console.log(userTwo); // User {email: 'yoshi@mariokorp.com', name: 'Yoshi'}

userOne.login(); // output: ryu@ninjas.com just logged in
userTwo.logout();// output: yoshi@mariokorp.com just logged out

//With this, we're ENCAPSULATING everything it means to be a user inside this class

///// METHOD CHAINING /////

userOne.login().logout(); //this is called method chaining, and it won't work as is. 
//the output would be an error: cannot read properties of undefined. bc userOne.login() as a value is undefined

userOne.updateScore(); //output: ryu@ninjas.com score is now 1
userOne.updateScore(); //output: ryu@ninjas.com score is now 2
userOne.updateScore(); //output: ryu@ninjas.com score is now 3

userTwo.updateScore(); //output: yoshi@mariokorp.com score is now 1

// We don't want to return an undefined value every time we call a method, we want to return the instance of that object
// The instance of the object is stored in 'this'
// Since we've added 'return this' to the methods in our User class, we should now be able to method chain

userOne.login().updateScore().updateScore().logout();
//output: ryu@ninjas.com just logged in
//        ryu@ninjas.com score is now 1
//        ryu@ninjas.com score is now 2
//        ryu@ninjas.com just logged out

///// CLASS INHERITANCE /////

// Say we have users, and they all have the User class methods and properties.
// But we may also want admins that still have the properties and methods of regular users, but with extra methods
// like 'delete user'; so we should create a new Admin class, but the problem is we want all the regular user stuff inside that as well.

// We can use CLASS INHERITANCE //
class Admin extends User { //this gives admin access to User properties/methods when creating a new Admin
    //if we don't have a constructor in the class that extends, it will just use the one from User
    deleteUser(user){
        users = users.filter(u => { //u is the individual user
            return u.email != user.email //if the email doesn't match with the user we've passed in to delete, then it stays in the array 
            //if it is false (which means the emails match), it's filtered out of the array, or "deleted"
        }) // allows us to cycle through each element inside the array and filter one or more out of the array
    }

}

var users = [userOne, userTwo]

var admin = new Admin('shaun@ninjas.com', 'Shaun')

admin.deleteUser(userTwo);

console.log(users); // output: User {email: "ryu@ninjas.com", name: "Ryu", score: 0}

///// CONSTRUCTORS (UNDER THE HOOD) /////

// ES6 classes are just syntactic sugar built upon the JavaScript Prototype model.
// JavaScript as a language doesn't really have classes. These are pretend classes in a sense. 
// Classes are just a thin layer of ABSTRACTION built on top of the JavaScript prototype model.

// Let's create a constructor function

function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    // this.login = function(){
    //     console.log(this.email, 'has logged in')
    // }
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

console.log(userOne); // output: User {email: 'ryu@ninjas.com', name: 'Ryu', online: false}
userTwo.login(); //output: yoshi@mariokorp.com has logged in

///// PROTOTYPE /////

var nums = [1,2,3,4,5]

//JS automatically proxies all methods under __proto__ property up onto the object itself. (check console.logs to see the __proto__ )

//Every object type has a prototype. This prototype is like a map for that object type.
// the __proto__ property points to the methods that get shared with the object type. 

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in')
}

//bc the __proto__ property of the users will point to the User prototype, 
//the login function will now be in the __proto__ property

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out')
}



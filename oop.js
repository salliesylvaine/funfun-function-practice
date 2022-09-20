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

//Classes in JS are like blueprints
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
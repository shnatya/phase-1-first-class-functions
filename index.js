//receivesAFunction function takes a callback function as an argument.
function receivesAFunction(day) {
    return day();
}

receivesAFunction(function(){return "Today is Thursday!"});

//returnsANamedFunction function takes no arguments and returns a named function hello().
function returnsANamedFunction() {
        return function hello() {
            console.log("Hello, world!");
    }
}

returnsANamedFunction();

//returnsAnAnonymousFunction function takes no arguments and returns an anonymous function.
function returnsAnAnonymousFunction() {
    //return (() => console.log("Now is lunchtime!")); //first example with an arrow function.
    return function() {
        console.log("Hey Hey Hey!");
    }
};

returnsAnAnonymousFunction();
function sayHello (lastName, greeting){
    return greeting(lastName);
};

sayHello('Marcoux', function(lastName) { return `Hey there, ${lastName}.` });

function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return function hiWorld (){
        console.log('Hello, World!');
    };
};

function returnsAnAnonymousFunction(){
    return function(){
        console.log('This is hard.')
    }
}
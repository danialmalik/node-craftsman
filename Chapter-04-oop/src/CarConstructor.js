

// Constructor
var Car = function () {
    this.honk = function () {
        console.log('honk honk');
    };
};

var myCar1 = new Car();
var myCar2 = new Car();
console.log(myCar1.constructor); // outputs [Function: Car]
console.log(myCar2.constructor); // outputs [Function: Car]


// Using prototypes
var Car = function(){
}

Car.prototype.honk = function() {
    console.log('honk honk')
}


var myCar1 = new Car();
var myCar2 = new Car();

myCar1.honk();
myCar2.honk();


// Changing individually
myCar2.honk = function(){
    console.log('meep meep')
}

myCar1.honk();
myCar2.honk();

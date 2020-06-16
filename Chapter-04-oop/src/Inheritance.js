var vehicle = {};

vehicle.drive = function () {
    console.log('vrooom...');
};

var car = Object.create(vehicle);

car.honk = function () {
    console.log('honk honk');
};

var myVehicle = Object.create(vehicle);
var myCar1 = Object.create(car);
var myCar2 = Object.create(car);

myCar1.honk(); // outputs "honk honk"
myCar2.honk(); // outputs "honk honk"

myVehicle.drive(); // outputs "vrooom..."
myCar1.drive(); // outputs "vrooom..."
myCar2.drive(); // outputs "vrooom..."

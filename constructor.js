var Car = function (maxSpeed, wheels) {
    this.maxSpeed = maxSpeed;
    this.wheels = wheels;
    this.test = function(){
        console.log(this);
    };
    this.logWheels = function () {
        console.log("Number of wheels: " + this.wheels);
    };
    this.drive = function (speed, time) {
        console.log(speed * time);
    };
};

var myCar = new Car(200, 5);
var myCar2 = new Car(210, 4);
var myCar3 = new Car(80, 8);
var myCar4 = new Car(290, 6);

console.log(myCar.maxSpeed);
myCar3.logWheels();
myCar4.drive(250, 4);
var myCar = {
    maxSpeed: 220,
    wheels: 4,
    drive: function (speed, time) {
        console.log(speed * time);
    },
    test: function(){
        console.log(this);
    }
};

var myCar2 = {
    maxSpeed: 240,
    wheels: 6,
    drive: function (speed, time) {
        console.log(speed * time);
    },
    test: function(){
        console.log(this);
    },
    logWheels: function (){
        console.log("Number of wheels: " + this.wheels);
    }
};

console.log(myCar.maxSpeed);
myCar.drive(120, 3);
myCar.test();
myCar2.test();
myCar2.logWheels();
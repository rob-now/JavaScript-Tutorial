var myCar = {
    maxSpeed: 220,
    wheels: 4,
    drive: function (speed, time) {
        console.log(speed * time);
    }
};

console.log(myCar.maxSpeed);
myCar.drive(120, 3);
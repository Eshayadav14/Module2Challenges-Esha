class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is now going at ${this.speed} km/h.`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is now going at ${this.speed} km/h.`);
    return this;
  }
}

class EV extends Car {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make} has been charged to ${chargeTo}%.`);
    return this;
  }

  accelerate() {
    super.accelerate();
    console.log(`${this.make} is accelerating and charging...`);
    return this;
  }
}
const ev1 = new EV("Rivian", 120, 23);
ev1.accelerate().chargeBattery(50).brake();

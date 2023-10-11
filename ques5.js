class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is now going at ${this.speed} km/h.`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is now going at ${this.speed} km/h.`);
  }
}

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

console.log(`Data car 1: ${car1.make} going at ${car1.speed} km/h`);
console.log(`Data car 2: ${car2.make} going at ${car2.speed} km/h`);

car1.accelerate();
car1.accelerate();
car1.brake();

car2.accelerate();
car2.brake();

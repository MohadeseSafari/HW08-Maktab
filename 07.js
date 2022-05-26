class Animal {
    constructor(name, speak) {
        this.name = name;
        this.speak = speak;
    }
    walk() {
        console.log(`${this.name} walks.`);
    }
}

class Dog extends Animal {
    constructor(name, owner, speak) {
        super(name, speak);
        this.owner = owner;
    }
    walk() {
        console.log(`${this.name} can walks.`);
    }

}

let myDog = new Dog("Spot", "John", false);
console.log(myDog);
console.log(myDog.name);
console.log(myDog.owner)
myDog.walk();

let animal = {
    speaks: true,
};
let dog = {
    runs: true,
};
dog.__proto__ = animal;
console.log(dog.speaks); // true (**)
console.log(dog.runs); // true

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    move(spped){
        console.log(`${this.name} is moving at ${spped}`);
    }
}
class Human extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

const teja = new Human('teja', 25, '10m/s');
const fish = new Fish('Fish', 2, '5m/s');

console.log(teja.name);
teja.move(teja.runSpeed);

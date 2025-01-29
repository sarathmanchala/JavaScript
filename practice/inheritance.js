class Animal{
    alive = true;
    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}

class Human extends Animal{
    name = 'teja';
    walk(){
        console.log(`${this.name} is walking`);
    }
}
class Dog extends Animal{
    name = 'Dog';
    bark(){
        console.log(`${this.name} is barking`);
    }
}
class Fish extends Animal{
    name = 'Fish';
    swim(){
        console.log(`${this.name} is swimming`);
    }
}

const teja = new Human();
teja.eat();
teja.walk();
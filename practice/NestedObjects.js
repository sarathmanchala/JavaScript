class Address{
    constructor(city, state, country){
        this.city = city;
        this.state = state;
        this.country = country;
    }
}
class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

const person1 = new Person("Sarath", 21, "Guntur", "Andhra Pradesh", "India");
console.log(person1.name);
console.log(person1.age);
console.log(person1.address);

function Car(model, brand, year, color){
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.color = color;
}

const car1 = new Car('A4', 'Audi', 2019, 'black');
const car2 = new Car('A6', 'Audi', 2020, 'white');
const car3 = new Car('A8', 'Audi', 2021, 'red');

console.log(car1.brand);
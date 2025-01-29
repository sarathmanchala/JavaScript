const persons = [{name : "Jahnavi", age : 21.11, city : "Guntur"},
                 {name: "Sarath", age:21.07, city : "Narasaraopet"},
                 {name: "Mani", age:22.7, city: "Bangalore"},
                 {name: "Pranay", age: 21.08, city: "Hyderabad"},
                 {name: "Indiveer", age:21.03, city: "Hyderabad"}
                ]

const maxAge = persons.reduce((max, person) => person.age > max.age ? person : max);
const minAge = persons.reduce((min, person) => person.age < min.age ? person : min);

console.log(maxAge);
console.log(minAge);    
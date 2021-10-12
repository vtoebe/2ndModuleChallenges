const people = [
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100}
];

const ageCheck = element => (element.age >= 18 ? `${element.name} can go to The Matrix` : `${element.name} is under age!`)
const whoCanGo = arr => arr.map(element => ageCheck(element))

console.log(whoCanGo(people))
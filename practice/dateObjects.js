const today = new Date();
console.log(today);

const jaanubirthDay = new Date(2025, 1, 27);
console.log(jaanubirthDay);

const myDay = new Date();
myDay.setFullYear(2025);
myDay.setMonth(11);
myDay.setDate(31);
console.log(`I am going to do something great on ${myDay}`);
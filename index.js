let Mouse = require('./mouse');
let Cat = require('./cat');

let mouse1 = new Mouse("jerry", "red");
let mouse2 = new Mouse("Chuong", "yellow");
let cat1 = new Cat("phuc", "green");
cat1.eat(mouse1);
console.log(cat1);
function Cat(name, color){
    this.name = name;
    this.color = color;
    this.stomeach = [];
}

Cat.prototype.eat = function(mouse){
    this.stomeach.push(mouse);
    mouse.die();
}

module.exports = Cat;


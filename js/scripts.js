function Order() {
  this.pizzas = {};
  this.total = 0;
  this.currentId = 0;
}

Order.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.person] = pizza;
}

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Order.prototype.findPizza = function(id) {
  if (this.pizzas[id] != undefined) {
    return this.pizzas[id];
  }
  return false;
};
function Pizza(person, size, crust, sauce,) {
  this.person = person;
  this.size = size;
  this.crust = false;
  this.sauce = sauce;
  this.toppings = [];
}

Pizza.prototype.calculateCost = function () {
  let sizePrice = 0;
  let crustPrice = 0;
  let toppingsPrice = 0;
  if (this.size === 10) {
    sizePrice = 7;
  } else if (this.size === 12) {
    sizePrice = 10;
  } else {
    sizePrice = 14;
  }
  if (this.crust === true) {
    crustPrice = 3; 
  }
  if (this.toppings.length === 1) {
    toppingsPrice = 2;
  } else if (this.toppings.length === 2 || this.toppings.length === 3){
    toppingsPrice = 5;
  } else if (this.toppings.length > 3){
    toppingsPrice = 8;
  } else {
    toppingsPrice = 0;
  }
  this.price = crustPrice + sizePrice + toppingsPrice;
  return this.price
}
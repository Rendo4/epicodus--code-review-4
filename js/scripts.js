function Order() {
  this.pizzas = [];
  this.total = 0;
}

function Pizza(size, crust, sauce,) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = [];
}

Pizza.prototype.calculateCost = function () {
  if (this.size === 10) {
    this.price = 7;
  } else if (this.size === 12) {
    this.price = 10;
  } else {
    this.price = 14;
  }
  return this.price
}
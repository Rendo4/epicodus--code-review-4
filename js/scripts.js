function Order() {
  this.pizzas = [];
  this.total = 0;
}

function Pizza(size, crust, sauce, price) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.price = price
  this.toppings = [];
}
function Order() {
  this.pizzas = [];
  this.total = 0;
  this.currentId = 0;
}
Order.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Order.prototype.findPizza = function (id) {
  for (let i = 0; i < this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        return this.pizzas[i];
      }
    }
  }
  return false;
};

Order.prototype.deletePizza = function (id) {
  for (let i = 0; i < this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        delete this.pizzas[i];
        return true;
      }
    }
  }
  return false;
};
function Pizza(person, size, sauce, toppings, price) {
  this.person = person;
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
  this.price = price;
}

function calculateCost(tops, inputtedSize) {
  let sizePrice = 0;
  let crustPrice = 0;
  let toppingsPrice = 0;
  if (inputtedSize === 10) {
    sizePrice = 7;
  } else if (inputtedSize === 12) {
    sizePrice = 10;
  } else {
    sizePrice = 14;
  }
  if (tops.length === 1) {
    toppingsPrice = 2;
  } else if (tops.length === 2 || tops.length === 3){
    toppingsPrice = 5;
  } else if (tops.length > 3){
    toppingsPrice = 8;
  } else {
    toppingsPrice = 0;
  }
  cost = sizePrice + toppingsPrice;
  return cost
}

let order = new Order();

function displayPizzaDetails(orderToDisplay) {
  let pizzasList = $("ul#order");
  let htmlForPizzaInfo = "";
  orderToDisplay.pizzas.forEach(function (pizza) {
    htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size + " " + pizza.sauce + "-" + pizza.toppings + " " + pizza.person +" $" + pizza.price + "</li>";
  })
  pizzasList.html(htmlForPizzaInfo);
};

function showPizza(pizzaId) {
  const pizza = order.findPizza(pizzaId)
  $(".size").html(pizza.size);
  $(".sauce").html(pizza.sauce);
  $(".toppings").html(pizza.toppings);
  $(".name").html(pizza.name);
  $(".price").html(pizza.price);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + pizza.id + ">Delete<button>");
}

function attachContactListeners() {
  $("ul#order").on("click", "li", function () {
    showPizza(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    order.deletePizza(this.id);
    $("#show-order").hide();
    $("#add-pizza").hide();
    displayPizzaDetails(order);
  });
}

$(document).ready(function () {
  attachContactListeners();
  $("form#createPizza").submit(function (event) {
    event.preventDefault();
    tops = []
    const inputtedName = $("input#name").val();
    const inputtedSize = parseInt($("select#size").val());
    const inputtedSauce = $("select#sauce").val();
    const inputtedToppings = $("input:checkbox[name=top]:checked").each(function(){
      const toppings = $(this).val()
      tops.push(toppings)
    });
    let pizzaCost = calculateCost(tops, inputtedSize);
    console.log(pizzaCost)
    let newPizza = new Pizza(inputtedName, inputtedSize,inputtedSauce, tops, pizzaCost);
    order.addPizza(newPizza);
    displayPizzaDetails(order);
  })
})
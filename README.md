# _epicodus_review_4_ #

#### _An application to show my understanding of object programming featuring objects, constructors, and prototypes._

#### By _**Ryan Rendon**_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Jquery_

## Description

_Hello and thank you for viewing 'Next Level Pizzaria' application! This project uses concepts learned in my early weeks at epicodus. It combines HTML elements with bootstrap as well as a custom style sheet! The application will take a set of inputs and create a new object called pizzas to simulate creating an order of customizeable pizzas and return a cost based on your entries._

## TTD Specs
_Describe: calculateCost();

Test: "It should check the length of 'tops' to determine how many toppings were selected and change the price ."
Code:let tops =["mushroom","onion"];
calculateCost(tops, 10)
Expected Output: pizza.price = 12

Test: "It should adjust the price of the pizza based off the size of the pizza"
Code: let tops = [];
calculateCost(tops, 14)  
Expected Output: pizza.price = 14

Test: "It should adjust the price of the pizza based off the size of the pizza, and the amount of toppings"
Code: let tops = ["mushroom","onion"];
calculateCost(tops, 14)  
Expected Output: pizza.price = 19

_Describe: newOrder.addPizza()

Test: "It should store a created pizza inside the object Order, and inside the object pizzas"
Code: let newPizza = new Pizza("Ted",10,...);
let newOrder = new Order(); 
newOrder.addPizza(newPizza);
newOrder.pizzas["Ted"]
Expected Output: returns newPizza

_Describe: newOrder.findPizza()

test: "it should locate a pizza in the order.pizzas array, and return the selected pizza"
code: let newOrder = new Order() 
let newPizza = new Pizza ("Ryan", "14", "original", ["mushroom", "onions"], 19)
newOrder.findPizza(0);
Expected Output: newPizza;

## Setup/Installation Requirements

* You can visit my github Rendo4 or you can copy this link to my repository https://github.com/Rendo4/epicodus-review-4 
* _open your terminal_
* _use the command "cd desktop"_
* _use the command "git clone (https://github.com/Rendo4/epicodus-review-4)_
* _It should now be on your desktop! Open the folder "epicodus-review-3"_
* _Click on "Index.html" This will open the file for viewing._

## Known Bugs

* _No known bugs_

## License

Copyright 2021 Ryan Rendon

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Contact Information
_{Rendon.S.Ryan@gmail.com}_
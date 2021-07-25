# PizzaBlum Website

#### Website, November 2021

#### By Alex Dominguez

## Description

Website about pizza generator were the user orders pizza according to specific toppings, size, etc.HTML/CSS/Javascript.

## Setup/Installation Requirements

* None_
## Known Bugs

### Github pages

https://github.com/dominguezsantal/pizzaParlor/githubio

### Installation
-Installation

_1. Clone this repository to your desktop.

_2. Navigate to the top level of the directory

-3. 3. Open index.html in your browser

_To Clone Project, follow the instructions as guidelined here: https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository.

_Forking, follow the instructions as guidelined here: https://docs.github.com/en/github/getting-started-with-github/quickstart/fork-a-repo







## Technologies Used

JS,HTML and CSS

### License
MIT License

Copyright (c) 2021 Alex Dominguez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


Copyright (c) 2018 **_AlexPage_**






//Adding main features
Test 1
Describe: Add a constructor for pizza form
Code : function Pizza(parameter1, parameter2,parameter3,parameter4){ } 

Expected Output: The constructor will be the blueprint for the prototype of the object parameter and the proto object of this form.

Test 2
Describe: add the first radio button(pizza size cost)in the form works and outputs the cost.
Code : calculateSizeCost()

Expected Output: CalculateSizeCost  will be the first test for the if else statement if the result is iterating through, and displaying in the console.

Test 3
Describe: add meat checkbox button(meat)in the form 
Code : calculateMeatCost()

Expected Output: CalculateMeatCost will be the secondtest for the if else statement if the result is iterating through, and displaying in the console.

Test 4
Describe: add cheese checkbox button
Code : calculateCheeseCost()

Expected Output: CalculateCheeseCost will be the third test for the if else statement if the result is iterating through, and displaying in the console.

Test 5
Describe: output calculateSizeCost result into the totalCost(showCost)button
Code : let showCost = selectedPizza.calculateSizeCost();
Expected Output: size cost.

Test 6
Describe: output calculateSizeCost and calculateMeatCost into showCost
Code : let showCost = selectedPizza.calculateSizeCost()+ selectedPizza.calculateMeatCost();
Expected Output: size + meat cost.

//debbuging tests
Test 7
Describe: debug size and meat cost
Code : let showCost = selectedPizza.calculateSizeCost()+ selectedPizza.calculateMeatCost();
Expected Output: combined result showing in the console correctly.

Test 8
Describe: debug calculateSizeCost, calculateMeatCost and calculateCheeseCost into showCost
Code : let showCost = selectedPizza.calculateSizeCost()+ selectedPizza.calculateMeatCost()+ calculateCheeseCost();

Expected Output: size + meat + cheese cost.

Test 9
Describe: showCost is displaying incorrectly. Even when form is refreshed, it's adding result of previous form's choices into new. 
Solution: After this.size, make everything else an array into the constructor and ui to referenced it(?)
Code :meatArray = [];

Expected Output: correct size + meat + cheese cost.



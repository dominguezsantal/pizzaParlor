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



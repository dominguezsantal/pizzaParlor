//Business Logic
//constructor or object's blueprint of pizza form
function Pizza(size, meat, cheese) {
    this.size = size;
    this.meat = meat;
    this.cheese = cheese;
    this.toppings = toppings;
    //this.sauce = sauce;
    this.cost = 0;
}



//prototype for pizza size cost
Pizza.prototype.calculateSizeCost = function() {
        if (this.size === "small") {
            this.cost = 6;
        } else if (this.size === "medium") {
            this.cost = 8;
        } else if (this.size === "large") {
            this.cost = 10;
        } else if (this.size === "extra-large") {
            this.cost = 12;
        }
        return this.cost;

    }
    //meat cost
Pizza.prototype.calculateMeatCost = function() {
        if (this.meat === "chicken") {
            this.cost = 2;
        } else if (this.meat === "bacon") {
            this.cost = 2;
        } else if (this.meat === "pepperoni") {
            this.cost = 2;
        } else if (this.meat === "salmon") {
            this.cost = 4;
        } else if (this.meat === "steak") {
            this.cost = 5;
        }
        return this.cost;
    }
    //cheese cost
Pizza.prototype.calculateCheeseCost = function() {
    if (this.cheese === "mozarella") {
        this.cost = 1;
    } else if (this.cheese === "harvati") {
        this.cost = 1;
    } else if (this.cheese === "provolone") {
        this.cost = 1;
    } else if (this.cheese === "american") {
        this.cost = 1;
    }
    return this.cost;
}
Pizza.prototype.calculateToppingsCost = function() {
    if (this.toppings === "tomatoes") {
        this.cost = 1;
    } else if (this.toppings === "bellPepper") {
        this.cost = 1;
    } else if (this.toppings === "onions") {
        this.cost = 1;
    } else if (this.toppings === "blackOlives") {
        this.cost = 1;
    } else if (this.toppings === "broccoli") {
        this.cost = 1;
    } else if (this.toppings === "pineapple") {
        this.cost = 1;
    }
    return this.cost;
}

//







//User Interface
$(document).ready(function() {
    $("#pizza-form").submit(function(event) {
        event.preventDefault();
        let size = $("input:radio[name='size']:checked").val();
        let meat = $("input:checkbox[name='meat']:checked").val();
        let cheese = $("input:checkbox[name='cheese']:checked").val();
        let toppings = $("input:checkbox[name='cheese']:checked").val();

        //obj for customer's pizza choice
        let selectedPizza = new Pizza(size, meat, cheese, toppings);

        //final cost of pizza(s)
        let showCost = selectedPizza.calculateSizeCost() + selectedPizza.calculateMeatCost() + selectedPizza.calculateCheeseCost() + selectedPizza.calculateToppingsCost();


        //let showCost = selectedPizza.cost;


        $("#finalCost").show();
        $("#finalCost").text(showCost);
        console.log(showCost);
    });
});
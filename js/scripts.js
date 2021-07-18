//Business Logic
//constructor or object's blueprint of pizza form
function Pizza(size, meat, cheese, toppings, sauce) {
    this.size = size;
    this.meat = meat;
    this.cheese = cheese;
    this.toppings = toppings;
    this.sauce = sauce;
    this.cost = 0;
}
//prototype for pizza size cost
Pizza.prototype.calculateSizeCost = function() {
        if (this.size === "small") {
            this.cost = this.cost + 6;
        } else if (this.size === "medium") {
            this.cost = this.cost + 8;
        } else if (this.size === "large") {
            this.cost = this.cost + 10;
        } else if (this.size === "extra-large") {
            this.cost = this.cost + 12;
        }
        //meat cost
        Pizza.prototype.calculateMeatCost = function() {
                if (this.meat === "chicken") {
                    this.cost = this.cost + 2;
                } else if (this.meat === "bacon") {
                    this.cost = this.cost + 2;
                } else if (this.size === "pepperoni") {
                    this.cost = this.cost + 2;
                } else if (this.size === "salmon") {
                    this.cost = this.cost + 4;
                } else if (this.size === "steak") {
                    this.cost = this.cost + 5;
                }
                //cheese cost
                Pizza.prototype.calculateCheeseCost = function() {
                    if (this.cheese === "mozarella") {
                        this.cost = this.cost + 1;
                    } else if (this.cheese === "harvati") {
                        this.cost = this.cost + 1;
                    } else if (this.size === "provolone") {
                        this.cost = this.cost + 1;
                    } else if (this.size === "american") {
                        this.cost = this.cost + 4;
                    }

                }










                //User Interface
                $(document).ready(function() {
                    $("#pizza-form").submit(function(event) {
                        event.preventDefault();
                        let size = $("input:radio[name='size']:checked").val();
                        let meat = $("input:checkbox[name='meat']:checked").val();
                        let cheese = $("input:checkbox[name='cheese']:checked").val();


                        let selectedPizza = new Pizza(size, meat, cheese);

                        //final cost of pizza(s)
                        let selectedPizzaCost = calculateSizeCost + calculateMeatCost;
                        console.log(selectedPizzaCost);
                        $("#final-cost").show();
                    });
                });
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

}










//User Interface
$(document).ready(function() {
    $("#pizza-form").submit(function(event) {
        event.preventDefault();
        let size = $("input:radio[name='size']:checked").val();
        let selectedPizza = new Pizza(size);

        //final cost of pizza(s)
        selectedPizza.calculateSizeCost();
        console.log(selectedPizza);
        $("#final-cost").show();
    });
});
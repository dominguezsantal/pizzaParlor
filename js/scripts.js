//Business Logic
//constructor or object's blueprint of pizza form
function Pizza(size, meat, cheese, toppings, sauce) {
    this.size = size;
    this.meat = meat;
    this.cheese = cheese;
    this.toppings = toppings;
    this.sauce = sauce;
}

//User Interface
$(document).ready(function() {
    $("#pizza-form").submit(function(event) {
        event.preventDefault();
        let size = $("input:radio[name='size']:checked").val();
        let selectedPizza = new Pizza(size);

        //
        selectedPizza.calculatePrice();

        $("#final-cost").show();
    });
});
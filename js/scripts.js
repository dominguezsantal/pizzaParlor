//Business Logic
//constructor or object's blueprint of pizza form
function Pizza(size, meat, cheese, toppings) {
    this.size = size;
    this.meat = meat;
    this.cheese = cheese;
    this.toppings = toppings;
    this.cost = 0;
}

//prototype for pizza size cost
Pizza.prototype.calculatePizzaCost = function() {
    if (this.size === "small") {
        this.cost = this.cost += 6;
    } else if (this.size === "medium") {
        this.cost = this.cost += 8;
    } else if (this.size === "large") {
        this.cost = this.cost += 10;
    } else if (this.size === "extra-large") {
        this.cost = this.cost += 12;
    }
    //meat cost
    for (var i = 0; i < this.meat.length; i++) {
        this.cost += 4;
    }
    //cheese cost
    for (var i = 0; i < this.cheese.length; i++) {
        this.cost += 1;
    }
    //toppings cost
    for (var i = 0; i < this.toppings.length; i++) {
        this.cost += 1;
    }
}






//User Interface
$(document).ready(function() {
    $("form#pizza-form").submit(function(event) {
        event.preventDefault();
        let size = $("input:radio[name='size']:checked").val();
        //let meat = $("input:checkbox[name='meat']:checked").val();
        //let cheese = $("input:checkbox[name='cheese']:checked").val();
        //let toppings = $("input:checkbox[name='cheese']:checked").val();
        var meatUser = [];
        $.each($("input:checkbox[name='meat']:checked"),
            function() {
                meatUser.push($(this).val());

            });
        var cheeseUser = [];
        $.each($("input:checkbox[name='cheese']:checked"),
            function() {
                cheeseUser.push($(this).val());

            });
        var toppingsUser = [];
        $.each($("input:checkbox[name='toppings']:checked"),
            function() {
                toppingsUser.push($(this).val());

            });

        //obj for customer's pizza choice
        let selectedPizza = new Pizza(size, meatUser, cheeseUser, toppingsUser);
        console.log(selectedPizza);
        //final cost of pizza(s)
        selectedPizza.calculatePizzaCost();



        $("#showCost").text(selectedPizza.cost);
        //console.log(showCost);
        $("#finalCost").show();
    });
});
$(document).ready(function () {

    // Your code here...

    // Global Variables to hold the users options
    var numberOne = "";
    var numberTwo = "";
    var operator = "";
    var total = 0;
    var isOperatorSelected = false;
    var isCalculated = false;



    // Initilaizes the calculator and clears the content  
    function init() {
        var numberOne = "";
        var numberTwo = "";
        var operator = "";
        var isOperatorSelected = false;
        var isCalculated = false;

        $("#first-number").empty();
        $("#second-number").empty();
        $("#operator").empty();
        $("#equal").empty();
        $("#result").empty();

        console.log(numberOne, numberTwo, operator, isOperatorSelected, isCalculated)
    }

    // function that sets the numbers based on weather or not an operator has been selected
    $(".number").on("click", function () {
        console.log(isCalculated)
        console.log(isOperatorSelected)
        // checks if a calulation has been made
        if (isCalculated) {
            return false;
        }
        if (isOperatorSelected) {
            console.log($(this).val())
            numberTwo += $(this).val();
            $("#second-number").text(numberTwo)
        }
        else {
            console.log($(this).val())
            numberOne += $(this).val();
            $("#first-number").text(numberOne);
        }
    });

    // function that sets the operator in the calculation
    $(".operator").on("click", function () {
        console.log($(this).val())
        if (!numberOne || isCalculated) {
            console.log("broken")
            return false;
        }

        isOperatorSelected = true;
        operator = $(this).val();

        if ($(this).val() === "plus") {
            op = "+"
        } else if ($(this).val() === "minus") {
            op = "-"
        } else if ($(this).val() === "times") {
            op = "x"
        } else if ($(this).val() === "divide") {
            op = "/"
        } else if ($(this).val() === "power") {
            op = "^"
        }

        $("#operator").text(op);
    });

    // onclick function for equal this converts the values to numbers and actually executes the problem
    $(".equal").on("click", function () {

        if (isCalculated) {
            return false;
        }

        $("#equal").text("=")
        // sets the is calculated to true so another problem cannot be solved without init()
        isCalculated = true;

        // values are vurrently strings so use parseInt()
        numberOne = parseInt(numberOne);
        numberTwo = parseInt(numberTwo);


        // need to add functions for basic equations 
        if (operator === "minus") {
            total = numberOne - numberTwo;
        } else if (operator === "plus") {
            total = numberOne + numberTwo;
        } else if (operator === "times") {
            total = numberOne * numberTwo;
        } else if (operator === "divide") {
            total = numberOne / numberTwo;
        } else if (operator === "power") {
            total = Math.pow(numberOne, numberTwo);
        }

        $("#result").text(total);
    });

    //  calls init when we hit clear
    $(".clear").on("click", function () {
        init();
    })

    // calls the init function on the page load
    init();

});
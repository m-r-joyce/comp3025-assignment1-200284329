/**
 *  calculator.js
 *  Michael Joyce | 200284329 | 25 January 2017
 *  Logic for a simple calculator application.
 */

var buffer;
var command;

// Event Listener for Button elements
$("button").click(function() {

    if ($(this).hasClass("operand")) {
        var result = $("#display").attr("value");
        if (result == 0) {
            result = $(this).html();
        }
        else {
        result += $(this).html();
        }
        $("#display").attr("value", result); 
    }
    else if ($(this).hasClass("operator") || $(this).hasClass("function")) {

        buffer = $("#display").attr("value");
        $("#display").attr("value", 0);
        command = $(this).attr("id");
        console.log(buffer);
        
    }
    
    else if ($(this).hasClass("equals")) {

        var input = $("#display").attr("value");
        var result = 0;

        console.log(command);

        switch (command) {

            case "multiply":
            result = multiply(buffer, input);
            break;

            case "divide":
            result = divide(buffer, input);
            break;

            case "add":
            result = add(buffer, input);
            break;

            case "subtract":
            result = subtract(buffer, input);
            break;

            case "squareRoot":
            result = squareRoot(input);
            break;

            case "exponentiate":
            result = exponentiate(buffer, input);
            break;

            case "factorial":
            result = factorial(input);
            break;

        }        

            $("#display").attr("value", result);
        }
    else if ($(this).hasClass("clear")) {
        buffer = 0;
        $("#display").attr("value", buffer);
    }

    /* 
    console.log(multiply(4,5));
    console.log(divide(8,2));
    console.log(add(4,4));
    console.log(subtract(8,4));
    console.log(exponentiate(5,5));
    console.log(factorial($(this).html()));
    */

/**
 *  Returns the product of two numbers.
 */
function multiply(multiplicand, multiplier) {

    let product = multiplicand * multiplier;
    return product;

}

/**
 *  Returns the quotient of two numbers.
 */
function divide(dividend, divisor) {

    let quotient = dividend / divisor;
    return quotient;

}

/**
 *  Returns the sum of two numbers.
 */
function add(addend, augend) {

    let sum = addend + augend;
    return sum;

}

/**
 *  Returns the difference of two numbers.
 */
function subtract(minuend, subtrahend) {

    let difference = minuend - subtrahend;
    return difference;

}

/**
 *  Returns the square root of a number.
 */
function squareRoot(radicand) {

    if (radicand >= 0) {
        let root = Math.sqrt(radicand);
        return root;
    }
    else {
        let errorMessage = "Result is imaginary";
        return errorMessage;
    }
}

/**
 *  Returns the first number to the power of the second.
 */
function exponentiate(base, exponent) {

    let power = base**exponent;
    return power;

}

/**
 *  Returns the product of all integers between 1 and the input number.
 */
function factorial(input) {

    if (input == 0) {
        let product = 1;
        return product;
    }
    else if (input > 0) {
        let product = input;
        while (input-- > 2) {
            product *= input;
        }
        return product;
    }
    else if (input < 0) {
        let error = "Undefined";
        return error;
    }
}

/**
 *  Clears the calculator display.
 */
function clear() {

    $("#display").attr("value", 0);
    
}

});
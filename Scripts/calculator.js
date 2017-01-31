/**
 *  calculator.js
 *  Michael Joyce | 200284329 | 25 January 2017
 *  Logic for a simple calculator application.
 */

var buffer;
var command;
var decimalKeyPressed = false;
var storedInput = 0;

// Event Listener for Button elements
$("button").click(function () {

    //Operand class assigned to numbers 0 to 9 and decimal point.
    if ($(this).hasClass("operand")) {

        storedInput = 0;
        var result = $("#display").attr("value");
        if (result == 0 || !$.isNumeric(result)) {
            if (!decimalKeyPressed || (decimalKeyPressed && $(this).html() != ".")) {
                result = $(this).html();
            }
        } else if (result != 0) {
            if (!decimalKeyPressed || (decimalKeyPressed && $(this).html() != ".")) {
                result += $(this).html();
            }
        }

        //Validation to prevent multiple decimals.
        if ($(this).html() == "." && !decimalKeyPressed) {
            decimalKeyPressed = true;
        }

        $("#display").attr("value", result);

    }
    //Operator class assigned to add, subtract, multiply, divide.
    //Function class assigned to factorial, square root, exponent.
    else if ($(this).hasClass("operator") || $(this).hasClass("function")) {

        storedInput = 0;
        if ($(this).attr("id") == "factorial") {
            var input = $("#display").attr("value");
            $("#display").attr("value", factorial(input));
        } else if ($(this).attr("id") == "squareRoot") {
            var input = $("#display").attr("value");
            $("#display").attr("value", squareRoot(input));
        } else {
            buffer = $("#display").attr("value");
            $("#display").attr("value", 0);
            command = $(this).attr("id");
        }

        decimalKeyPressed = false;
    }

    //Used to handle pressing of equals button, evaluating the equation.
    else if ($(this).hasClass("equals")) {

        var input = $("#display").attr("value");
        var result;

        if (storedInput != 0) {
            input = storedInput;
        }
        
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

            case "exponentiate":
                result = exponentiate(buffer, input);
                break;

        }

        buffer = result;
        storedInput = input;

        $("#display").attr("value", result);
        decimalKeyPressed = false;
    }
    //Reset display to 0.
    else if ($(this).hasClass("clear")) {

        clear();

    }

    /**
     *  Returns the product of two numbers.
     */
    function multiply(multiplicand, multiplier) {

        let product = parseFloat(multiplicand) * parseFloat(multiplier);
        return product;

    }

    /**
     *  Returns the quotient of two numbers.
     */
    function divide(dividend, divisor) {

        if (divisor != 0) {
            var quotient = parseFloat(dividend) / parseFloat(divisor);
            return quotient;
        } else {
            var error = "UNDEFINED";
            return error;
        }

    }

    /**
     *  Returns the sum of two numbers.
     */
    function add(addend, augend) {

        var sum = parseFloat(addend) + parseFloat(augend);
        return sum;

    }

    /**
     *  Returns the difference of two numbers.
     */
    function subtract(minuend, subtrahend) {

        var difference = parseFloat(minuend) - parseFloat(subtrahend);
        return difference;

    }

    /**
     *  Returns the square root of a number.
     */
    function squareRoot(radicand) {

        if (radicand >= 0) {
            var root = Math.sqrt(radicand);
            return root;
        } else {
            var errorMessage = "Result is imaginary";
            return errorMessage;
        }
    }

    /**
     *  Returns the first number to the power of the second.
     */
    function exponentiate(base, exponent) {

        var power = parseFloat(base) ** parseFloat(exponent);
        return power;

    }

    /**
     *  Returns the product of all integers between 1 and the input number.
     */
    function factorial(input) {

        if (input > 170) {
            //Inputs beyond 170 return Infinity.
            var error = "ANSWER TOO LARGE";
            return error;
        }

        // 0! equal to 1
        else if (input == 0) {
            var product = 1;
            return product;
        }
        // Verify that input is a whole number and then perform factorial.
        else if (input > 0 && input <= 170 && input.indexOf(".") == -1) {
            var product = input;
            while (input-- > 2) {
                product *= input;
            }
            return product;
        } else if (input < 0 || input.indexOf(".") != -1) {
            var error = "UNDEFINED";
            return error;
        }
    }

    /**
     *  Clears the calculator display.
     */
    function clear() {

        buffer = 0;
        $("#display").attr("value", buffer);
        decimalKeyPressed = false;
    }

});
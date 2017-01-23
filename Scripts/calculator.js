// Event Listener for Button elements
$("button").click(function() {

    console.log(multiply(4,5));
    console.log(divide(8,2));
    console.log(add(4,4));
    console.log(subtract(8,4));
    console.log(exponentiate(5,5));
    console.log(factorial($(this).html()));
});

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
        let root; //This will be a lot; get back to it at some point.
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

}
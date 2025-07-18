const fibonacci = function(num) {
    //Parse strings to int
    if (typeof(num) == "string") {
        num = parseInt(num);
    }

    //Handle negatives
    if (num < 0) {
        return "OOPS";
    }

    //Handle 0
    if (num === 0) {
        return 0;
    }

    //Fibonacci logic
    
    //Base case
    if (num === 1 || num === 2) {
        return 1;
    }

    return fibonacci(num-1) + fibonacci(num-2)
};

// Do not edit below this line
module.exports = fibonacci;

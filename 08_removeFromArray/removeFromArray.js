const removeFromArray = function(arr, ...elements) {
    console.log(arr);
    for (let element of elements) {
        if (arr.indexOf(element) > -1) {
            arr = arr.filter(num => num != element);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

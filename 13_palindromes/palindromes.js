const palindromes = function (string) {
    //Strip punctuation and lowercase
    string = string.replaceAll(" ", "").replaceAll(".","").replaceAll("!","").replaceAll(",","").toLowerCase();

    return (string == [...string].reverse().join(""));
};

// Do not edit below this line
module.exports = palindromes;

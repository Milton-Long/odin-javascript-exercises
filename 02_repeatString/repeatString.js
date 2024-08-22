const repeatString = function(word, num) {
    if(num < 0){
        return "ERROR";
    }
    let output = "";
    for(let i = 0; i < num; i++) {
        output = output.concat("", word);
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;

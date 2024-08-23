const removeFromArray = function(array, ...num) {
    let output = [];
    array.forEach((item) => {
        if(!num.includes(item)){
            output.push(item);
        }
    })

    return output;
};

// Do not edit below this line
module.exports = removeFromArray;

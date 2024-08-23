const sumAll = function(start, end) {
    if(start < 0 || end < 0){
        return "ERROR";
    }
    if(!Number.isInteger(start) || !Number.isInteger(end)){
        return "ERROR";
    }
    

    let firstTerm = Math.min(start, end);
    let lastTerm = Math.max(start, end);
    return lastTerm * (firstTerm + lastTerm) / 2;
};

// Do not edit below this line
module.exports = sumAll;

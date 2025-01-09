const sumAll = function(a,b) {
    let totalSum=0;
    if(!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0){
        return "ERROR"
    } else if (a > b){
        const diff = a - b;
        totalSum = totalSum + a;
        for(let i=0; i<=diff; i++){
            totalSum = totalSum + i;
        }
    } else if (b > a){
        const diff = b - a;
        totalSum = totalSum + b;
        for(let i=0; i<=diff; i++){
            totalSum = totalSum + i;
        }
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;

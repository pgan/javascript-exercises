
function removeFromArray(inputArray, ...charToRemove){
    let returnArray = [];
    inputArray.forEach((check)=>{
        if (!charToRemove.includes(check)){
            returnArray.push(check);
        }
    })
    return returnArray;
}

// Do not edit below this line
module.exports = removeFromArray;

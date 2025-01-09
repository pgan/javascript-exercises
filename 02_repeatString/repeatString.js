// const repeatString = function() {

// };
function repeatString(word,repeats){
    let repeatedString="";
    if(repeats<0){
        return repeatedString = "ERROR";
    }else{
        for(let i=0; i<repeats;i++){
            repeatedString=repeatedString+word;
        }
        return repeatedString;
    }


};

// Do not edit below this line
module.exports = repeatString;

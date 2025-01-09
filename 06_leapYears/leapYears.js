const leapYears = function(givenYear) {
    let isLeapYear = false;
    if(!Number.isInteger(givenYear)){
        return "ERROR"
    } else {
        if((givenYear % 4 == 0 && !(givenYear % 100 == 0)) || givenYear % 400 == 0){
            isLeapYear = true;
            return isLeapYear;
        } else {
            isLeapYear = false;
            return isLeapYear;
        }
    }
};

// Do not edit below this line
module.exports = leapYears;

const leapYears = function(year) {
    const divisbleByFour = year % 4 == 0;
    const isCenturyYear = (year % 100 == 0) 
    const isLeapYear = (year % 400 == 0)
    if(divisbleByFour && !isCenturyYear || (year % 400 == 0) ) {
        return true;
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;

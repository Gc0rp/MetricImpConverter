/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {

    var result;

    console.log("Input :" + input);
    if(input.match(/\//gi) == null) {

      result = input.match(/(\d+)((?:\.\d+)?)((?:\.\/\d+)?)((?:\/\d+)?)/gi).join('');

    } else if(input.match(/\//gi).length == 1) {
      var splitResult = result.split('/')
      result = Number(splitResult[0]) / Number(splitResult[1]);

    } else {
      result = 'invalid result';
    }

      console.log("Final Result: " + result);
      return result;
  };
  
  this.getUnit = function(input) {
    var result = input.match(/[a-z]/gi).join('');
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit){
      case 'gal':
        result = 'liters'
        return result;

      case 'lbs':
        result = 'kilograms'
        return result;

      case 'mi':
        result = 'kilometers'
        return result;

      case 'L':
        result = 'gallons'
        return result;

      case 'kg':
        result = 'lbs'
        return result;

      case 'km':
        result = 'miles'
        return result;

      default:
        result = 'invalid unit'
        return result;
    }
  };

  this.spellOutUnit = function(unit) {
    var result;
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const kmToMi = 0.621371;
    const kgToLbs = 2.20462;
    const lToGal = 0.264172;
    var result;

    switch(this.getReturnUnit(initUnit)) {
      case 'liters':
        result = (initNum) * galToL
        return result

      case 'kilograms':
        result = (initNum) * lbsToKg
        return result
      
      case 'kilometers':
        result = (initNum) * miToKm
        return result
      case 'gallons':
        result = (initNum) * lToGal;
        return result
      case 'lbs':
        result = (initNum) * kgToLbs;
        return result
      case 'miles':
        result = (initNum) * kmToMi;
        return result
      default:
        result = 'invalid unit'
        return result
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    returnNum = parseFloat(returnNum).toFixed(5);
    
    var result = {'initNum' : initNum, 'initUnit': initUnit, 
    'returnNum': returnNum, 'returnUnit': returnUnit,
    'string' : `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`}

    myregex = /\//gi
    return result;
  };
  
}

module.exports = ConvertHandler;

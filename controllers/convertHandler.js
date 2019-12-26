/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = input.match(/(\d+)((?:\.\d+)?)((?:\/\d+)?)/gi).join('');
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
        result = 'L'
        return result;

      case 'lbs':
        result = 'kg'
        return result;

      case 'mi':
        result = 'km'
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
    var result;

    switch(this.getReturnUnit(initUnit)) {
      case 'L':
        result = initNum * galToL
        return result

      case 'kg':
        result = initNum * lbsToKg
        return result
      
      case 'mi':
        result = initNum * miToKm
        return result
      default:
        result = 'invalid unit'
        return result
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;

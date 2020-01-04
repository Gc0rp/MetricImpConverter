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


    var inputNumber = input.slice(0, input.match(/[a-zA-Z]/).index);

    if(inputNumber.match('/') !== null){
      var splitNumber = inputNumber.split('/');
      if(splitNumber.length > 2) {
        result = 'invalid input'; 
      } else {
        result = Number(splitNumber[0]) / Number(splitNumber[1]);
      }
    } else {
      console.log("Input number : " + inputNumber);
      if(Number(inputNumber) === NaN || (Number(inputNumber) === 0) ) {
        result = 'invalid input';
      } else if(input.length == 0) {
        result = 1;
      } else {
        result = inputNumber;
      }
    }
    

    return result;
  };
  
  this.getUnit = function(input) {
    var result = input.match(/[a-zA-Z]/gi).join('');

    temp = result.toLowerCase();

    var units = ['gal', 'l', 'lbs', 'kg', 'mi', 'km'];

    if(units.indexOf(temp) == -1) {
      return 'invalid unit';
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit){
      case 'gal':
        result = 'l'
        return result;

      case 'lbs':
        result = 'kg'
        return result;

      case 'mi':
        result = 'km'
        return result;

      case 'l':
        result = 'gal'
        return result;

      case 'kg':
        result = 'lbs'
        return result;

      case 'km':
        result = 'mi'
        return result;

      default:
        result = 'invalid unit'
        return result;
    }
  };

  this.spellOutUnit = function(unit) {
    var result;
    unit = unit.toLowerCase();

    switch(unit) {
      case 'gal':
        result = 'gallons';
        return result;
      case 'l':
        result = 'liters';
        return result;
      case 'lbs':
        result = 'pounds';
        return result;
      case 'kg':
        result = 'kilograms';
        return result;
      case 'mi':
        result = 'miles';
        return result;
      case 'km':
        result = 'kilometers';
        return result;
      default:
        result = 'invalid input';
        return result;
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const kmToMi = 0.621371;
    const kgToLbs = 2.20462;
    const lToGal = 0.264172;
    var result;

    if(initUnit !== 'invalid unit' && initNum === 'invalid input'){
      initNum = 1;
    }

    switch(this.getReturnUnit(initUnit)) {

      case 'l':
        result = Number(( (initNum) * galToL).toFixed(5));
        return result;

      case 'kg':
        result = Number( ( (initNum) * lbsToKg).toFixed(5) );
        return result;
      
      case 'km':
        result = Number( ( (initNum) * miToKm).toFixed(5) );
        return result
      case 'gal':
        result = Number( ( (initNum) * lToGal).toFixed(5) );
        return result
      case 'lbs':

        result = Number( ( (initNum) * kgToLbs).toFixed(5) );
        return result
      case 'mi':
        result = Number( ( (initNum) * kmToMi).toFixed(5) );
        return result
      default:
        result = 'invalid unit'
        return result
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
  
    if(initUnit !== 'invalid unit' && initNum === 'invalid input'){
      initNum = 1;
    }

    var result = `${initNum} ${initUnit} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`

    return result;
  };
  
}

module.exports = ConvertHandler;

exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    var fizzBuzz = '';
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    if(num % 3 === 0) {
      fizzBuzz += 'fizz';
    }
    // if the number is divisible by 5, the function should return 'buzz';
    if(num % 5 === 0) {
      fizzBuzz += 'buzz';
    }
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    if(fizzBuzz.length) {
      return fizzBuzz;
    }
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number
    if(typeof num === 'number') {
      return num;
    }
    return false;
  }
};

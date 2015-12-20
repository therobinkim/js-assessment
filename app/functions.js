exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(moreStr) {
      return str + ', ' + moreStr;
    }
  },

  makeClosures : function(arr, fn) {
    return arr.map(function(element) {
      return function() {
        return fn(element);
      };
    });
  },

  partial : function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments : function() {
    return [].slice.call(arguments).reduce(function(previousValue, currentElement) {
      return previousValue + currentElement;
    }, 0);
  },

  callIt : function(fn) {
    return fn.apply(null, [].slice.call(arguments, 1));
  },

  partialUsingArguments : function(fn) {
    var args = [].slice.call(arguments, 1);
    return function() {
      var moreArgs = [].slice.call(arguments);
      return fn.apply(null, args.concat(moreArgs));
    };
  },

  curryIt : function(fn) {
    var length = fn.length;
    var allArgs = [];
    return function moreCurry(arg) {
      allArgs.push(arg);
      if(allArgs.length === length) {
        return fn.apply(null, allArgs);
      };
      return moreCurry;
    };
  }
};

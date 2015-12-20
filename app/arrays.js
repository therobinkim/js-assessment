exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.reduce(function(previousValue, currentElement, index) {
      if(currentElement === item) {
        return previousValue === -1 ? index : previousValue;
      }
      return previousValue;
    }, -1);
  },

  sum : function(arr) {
    return arr.reduce(function(prev, curr) {
      return prev + curr;
    }, 0);
  },

  remove : function(arr, item) {
    return arr.filter(function(element) {
      return element != item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    var element;
    for(var i = 0; i < arr.length; i++) {
      element = arr[i];
      if(element === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.reduce(function(previousValue, currentElement) {
      return currentElement === item ? previousValue + 1 : previousValue;
    }, 0);
  },

  duplicates : function(arr) {
    var count = {};
    arr.forEach(function(element) {
      count[element] = count[element] || 0;
      count[element]++;
    });
    return arr.filter(function(element) {
      if(count[element] > 1) {
        count[element] = 0;
        return true;
      }
      return false;
    });
  },

  square : function(arr) {
    return arr.map(function(element) {
      return Math.pow(element, 2);
    });
  },

  findAllOccurrences : function(arr, target) {
    return arr.map(function(element, index) {
      if(element === target) {
        return index;
      }
      return -1;
    }).filter(function(element) {
      return element > -1;
    });
  }
};

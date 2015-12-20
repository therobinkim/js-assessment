exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var obj = {
      timers: []
    };

    console.log(start);
    for(var i = start + 1; i <= end; i++) {
      obj.timers.push(asyncLog(i, (i - start) * 100));
    }

    obj.cancel = function() {
      obj.timers.forEach(function(timer) {
        clearTimeout(timer);
      });
    };

    return obj;

    function asyncLog(data, delay) {
      return setTimeout(function() {
        console.log(data);
      }, delay);
    }
  }
};

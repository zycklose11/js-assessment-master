exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(func, obj) {
    return func.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var ret = [];

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        ret.push(prop + ': ' + obj[prop]);
      }
    }

    return ret;
  }
};
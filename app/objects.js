exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, object) {
    return fn.call(object);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(object) {
    var ret = [];

    for (var prop in object) {
      if (object.hasOwnProperty(prop)) {
        ret.push(prop + ': ' + object[prop]);
      }
    }

    return ret;
  }
};
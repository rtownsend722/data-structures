var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.counter = 0;
  return someInstance;
};

var stackMethods = {
  push : function (value) {
    this.storage[this.counter] = value;
    this.counter = this.counter + 1;
  },

  pop : function() {
    var tempStorage = this.storage;
    var result = 0;
    var highestKey = Math.max.apply(null, Object.keys(tempStorage));
    result = this.storage[highestKey];
    delete this.storage[highestKey];
    return result;
  },

  size : function() {
    var tempStorage = this.storage;
    return Object.keys(tempStorage).length;
  }
};



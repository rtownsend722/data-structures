var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.counter = 0;
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {
  
  enqueue : function(value) {
    this.storage[this.counter] = value;
    this.counter = this.counter + 1;
  },

  dequeue : function() {
    var result = 0;
    var tempStorage = this.storage;
    var lowestKey = Math.min.apply(null, Object.keys(tempStorage));
    result = this.storage[lowestKey];
    delete this.storage[lowestKey];
    return result;
  },

  size : function() {
    var tempStorage = this.storage;
    return Object.keys(tempStorage).length;
  }

};



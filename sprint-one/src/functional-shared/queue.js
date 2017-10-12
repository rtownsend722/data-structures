var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue : function(value) {
    var key = this.counter;
    this.storage[key] = value; 
    this.counter = this.counter + 1;
  },

  dequeue : function() {
    var result = {};
    var keys = Object.keys(this.storage);
    var index = Math.min.apply(null, keys);
    result[index] = this.storage[index];
    delete this.storage[index];
    return result[index];
  },

  size : function() {
    var storageRef = this.storage;
    return Object.keys(storageRef).length;
  }
};





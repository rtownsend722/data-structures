
var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;

  _.extend(someInstance, stackMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return someInstance;
};

var stackMethods = {

  push : function(value) {
    this.storage[this.counter] = value;
    this.counter = this.counter + 1;
  },
  
  pop : function() {
    var result = {};
    var keys = Object.keys(this.storage);
    var index = Math.max.apply(null, keys);
    result[index] = this.storage[index];
    delete this.storage[index];
    return result[index]; 
  },

  size : function() {
    var storageRef = this.storage;
    return Object.keys(storageRef).length;
    
  }
};




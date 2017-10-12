var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
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




//------------------------------------------------------------//



//   var someInstance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};

//   var counter = 0;

//   // Implement the methods below

//   someInstance.enqueue = function(value) {
//     var key = counter;
//     storage[key] = value; 
//     counter++;
//   };

//   someInstance.dequeue = function() {
//     var result = {};
//     var keys = Object.keys(storage);
//     var index = Math.min.apply(null, keys);
//     result[index] = storage[index];
//     delete storage[index];
//     return result[index];
//   };

//   someInstance.size = function() {
//     return Object.keys(storage).length;
//   };

//   return someInstance;
// };


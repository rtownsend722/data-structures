var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var key = counter;
    storage[key] = value; 
    counter++;
  };

  someInstance.dequeue = function() {
    var result = {};
    var keys = Object.keys(storage);
    var index = Math.min.apply(null, keys);
    result[index] = storage[index];
    delete storage[index];
    return result[index];
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};



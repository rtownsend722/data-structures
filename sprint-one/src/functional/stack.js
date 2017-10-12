var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    var result = {};
    var keys = Object.keys(storage);
    var index = Math.max.apply(null, keys);
    result[index] = storage[index];
    delete storage[index];
    return result[index]; 
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

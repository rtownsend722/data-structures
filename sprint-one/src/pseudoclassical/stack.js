var Stack = function() {
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;
  this.counter = this.counter + 1;
};

Stack.prototype.pop = function() {
  var result = 0;
  var tempStorage = this.storage;
  var maxKey = Math.max.apply(null, Object.keys(tempStorage));
  result = this.storage[maxKey];
  delete this.storage[maxKey];
  return result;
};

Stack.prototype.size = function() {
  var tempStorage = this.storage;
  return Object.keys(tempStorage).length;
};






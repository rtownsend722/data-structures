var Queue = function() {
  this.storage = {};
  this.counter = 0;
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.counter] = val;
  this.counter = this.counter + 1;
};

Queue.prototype.dequeue = function() { 
  var result = 0;
  var tempStorage = this.storage;
  var minKey = Math.min.apply(null, Object.keys(tempStorage));
  result = this.storage[minKey];
  delete this.storage[minKey];
  return result;
};

Queue.prototype.size = function() {
  var tempStorage = this.storage;
  return Object.keys(tempStorage).length;
};





var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // debugger;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var flag = false;
  // var subArray = this._storage[index];
  // check if _.storage[index] is empty
  if (this._storage[index] === undefined) {
    //   if yes: add an empty array
    this._storage[index] = [];
  }

  _.each(this._storage[index], function(item) {
  //check if sub array has key already
    if (item[0] === k) {
      //if yes: update value of key
      item[1] = v;
      flag = true;
    } 
  });

  if (!flag) {
    this._storage[index].push([k, v]);
  }
};
  
HashTable.prototype.retrieve = function(k) {
  // debugger;
  var result;
  //get the index from the hash function
  var index = getIndexBelowMaxForKey(k, this._limit);
  //create a variable to store this._storage
  var subArray = this._storage[index];
  //loop through this._storage[index] (and maybe return this)
  _.each(subArray, function(item) {
    //check if 0 indexed item of current sub-array index is k
    if (item[0] === k) {
      //if yes: return the 1 index of same
      result = item[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //create temp var to store this._storage[index]
  var subArray = this._storage[index];
  //loop through sub Array
  _.each(subArray, function(item, index) {
    //check if 0 indexed item in sub array is k
    if (item[0] === k) {
      //splice out sub array index of k
      subArray.splice(index, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



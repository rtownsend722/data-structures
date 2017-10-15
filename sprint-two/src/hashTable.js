

var HashTable = function() {
  this._limit = 4;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var flag = false;
  if (this._storage[index] === undefined) {
    this._storage[index] = [];
  }

  _.each(this._storage[index], function(item) {
    if (item[0] === k) {
      item[1] = v;
      flag = true;
    } 
  });

  if (!flag) {
    this._storage[index].push([k, v]);
  }
  this.rebalance(index);
  
};

HashTable.prototype.rebalance = function(index) {
  var insert = function(k, v) {
    var index = getIndexBelowMaxForKey(k, this._limit);
    var flag = false;
    if (this._storage[index] === undefined) {
      this._storage[index] = [];
    }

    _.each(this._storage[index], function(item) {
      if (item[0] === k) {
        item[1] = v;
        flag = true;
      } 
    });

    if (!flag) {
      this._storage[index].push([k, v]);
    }
  };
  

  if (this._storage[index].length >= (0.75 * this._limit)) {
    var tempStorage = [];
    //traverse hash table and push each key value array to temporary storage
    _.each(this._storage, function(bucket) {
      if (typeof bucket !== 'function') {
        _.each(bucket, function(tuple) {
          tempStorage.push(tuple);
        });
      }
    });
    //make new HashTable with size double current hash table
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
    //iterate through temporary storage and add each key value array to new hash table
    var tempHashTable = this;
    _.each(tempStorage, function(tuple) {
      insert.call(tempHashTable, tuple[0], tuple[1]);
      // tempHashTable.insert(tuple[0], tuple[1]);
    });
  } else if (((this._storage[index].length) <= (0.25 * this._limit)) && _.limit > 8) {
    var tempStorage = [];
    //traverse hash table and push each key value array to temporary storage
    _.each(this._storage, function(bucket) {
      if (typeof bucket !== 'function') {
        _.each(bucket, function(tuple) {
          tempStorage.push(tuple);
        });
      }
    });
    //make new HashTable with size double current hash table
    this._limit *= 0.5;
    this._storage = LimitedArray(this._limit);
    //iterate through temporary storage and add each key value array to new hash table
    var tempHashTable = this;
    _.each(tempStorage, function(tuple) {
      insert.call(tempHashTable, tuple[0], tuple[1]);
      // tempHashTable.insert(tuple[0], tuple[1]);
    });    
  }
    
};

  
HashTable.prototype.retrieve = function(k) {
  var result;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var subArray = this._storage[index];
  _.each(subArray, function(item) {
    if (item[0] === k) {
      result = item[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var subArray = this._storage[index];
  _.each(subArray, function(item, index) {
    if (item[0] === k) {
      subArray.splice(index, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



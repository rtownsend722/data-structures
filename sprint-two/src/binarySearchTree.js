var BinarySearchTree = function(value) {
  this.left = null;
  this.right = null;
  this.value = value;
};

BinarySearchTree.prototype.insert = function(value) {
  //make a tree called newtree
  //make helper that accepts a tree
    //if newtree.value < tree.vale
      //if left node is empty
        //tree.left = newtree
      //else call helper on tree.left
    //else
      //if tree.right is empty
        //tree.right = newtree
      // else call helper

  var newTree = new BinarySearchTree(value);
  var addTree = function(tree) {
    if (newTree.value < tree.value) {
      if (tree.left === null) {
        tree.left = newTree;
      } else {
        addTree(tree.left);
      }
    } else {
      if (tree.right === null) {
        tree.right = newTree;
      } else {
        addTree(tree.right);
      }
    }
  };
  addTree(this);     
};

BinarySearchTree.prototype.contains = function(value) {
  var result = false;
  var searchTree = function(tree) {
    if (value === tree.value) {
      result = true;    
    } else if (value < tree.value && tree.left !== null) {
      searchTree(tree.left);
    } else if (tree.right !== null) {
      searchTree(tree.right);
    }
  };
  searchTree(this);
  return result;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var changeTree = function(tree) {
    cb(tree.value);
    if (tree.left !== null) {
      changeTree(tree.left);
    }
    if (tree.right !== null) {
      changeTree(tree.right);
    }
  };
  changeTree(this);
};

// A .left property, a binary search tree (BST) where all values are lower than than it the current value.
// A .right property, a BST where all values are higher than than it the current value.
// A .insert() method, which accepts a value and places in the tree in the correct position.
// A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
// A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
/*
 * Complexity: What is the time complexity of the above functions?
 */

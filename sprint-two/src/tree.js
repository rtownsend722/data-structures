var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; 
  newTree.parent = null; 
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {

};
//debugger;
treeMethods.addChild = function(value) {
  //instantiate a new tree with value
  var tree = Tree(value);
  //add the new tree to parent's children container
  tree.parent = this;
  this.children.push(tree);
};

treeMethods.removeFromParent = function() {
  this.parent = null; 
};

treeMethods.traverse = function(cb) {
  var traverseChildren = function(tree) {
    cb(tree.value);
    if (tree.children) {
      _.each(tree.children, function(child) {
        traverseChildren(child);
      });
    }
  };
  traverseChildren(this);
};

treeMethods.contains = function(target) {
  var results = false;
  //define helper function with this
  var searchChildren = function(node) {
  //check if current tree value equals target
    if (node.value === target) {
      //return true
      results = true;
      //else check if has children
    } else if (node.children) {
      //loop through children and for each child
      _.each(node.children, function(child) {
        //call helper on each child
        searchChildren(child);
      });
    }
  };
  //call helper function on this
  searchChildren(this);
  return results;
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

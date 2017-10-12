var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  
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
  this.children.push(tree);
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

//make node//
//make variable to store node constructor function
  //

/*
 * Complexity: What is the time complexity of the above functions?
 */

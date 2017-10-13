

// Instantiate a new graph
var Graph = function(value) {
  this.value = value;
  this.edge = [];
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newnode = new Graph(node);
  newnode.edge.push(this);
  this.edge.push(newnode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //debugger;
  var checked = [];
  var result = false;
  var checkEdges = function(obj) {
    checked.push(obj);
    console.log(checked);
    if (obj.value === node) {
      result = true;
    // } else if (obj.edge) {
    //   for (var key in obj.edge) {
    //     if (!(_.contains(checked, obj.edge[key]))) {
    //       checkEdges(obj.edge[key]);
    //     }
    //   }
    } else if (obj.edge) {
      _.each(obj.edge, function(item) {
        if (!(_.contains(checked, item))) {
          checkEdges(item);
        }
      });
    }
  };
  checkEdges(this);
  return result;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var checked = [];
  var checkEdges = function(obj) {
    checked.push(obj.toString());
  };
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // var values = Object.values(fromNode.edge);
  // return _.contains(values, toNode);
  var values = fromNode.edge;
  return _.contains(values, toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  
  fromNode.edge.push(toNode);
  toNode.edge.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //delete fromNode.edge[toNode];
  //delete toNode.edge[fromNode];
  var fromIndex = _.indexOf(fromNode.edge, toNode);
  if (index > -1) {
    fromNode.edge.splice(fromIndex, 1);
  } 
  var toIndex = _.indexOf(toNode.edge, fromNode);
  if (index > -1) {
    toNode.edge.splice(toIndex, 1);
  } 
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// It is an undirected graph. It does not have to be 'connected'.
// An .addNode() method that takes a new node and adds it to the graph
// A .contains() method that takes any node and returns a boolean reflecting whether it can be found in the graph
// A .removeNode() method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.
// An .addEdge() method that creates a edge (connection) between two nodes if they both are present within the graph
// A .hasEdge() method that returns a boolean reflecting whether or not two nodes are connected
// A .removeEdge() method that removes the connection between two nodes
// A .forEachNode() method that traverses through the graph, calling a passed in function once on each node
// What is the time complexity of the above functions?



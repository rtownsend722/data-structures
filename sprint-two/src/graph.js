

// Instantiate a new graph
var Graph = function(value) {
  this.nodes = [];
};



Graph.prototype.addNode = function(node) {
  var newNode = {value: node, edge: []};
  this.nodes.push(newNode);
};


Graph.prototype.contains = function(node) {
  var result = false;
  _.each(this.nodes, function(item) {
    if (item.value === node) {
      result = true;
    } 
  });
  return result;
};


Graph.prototype.removeNode = function(node) {
  var index;
  _.each(this.nodes, function(item) {
    if (_.contains(item.edge, node)) {
      var nodeIndex = _.indexOf(item.edge, node);
      item.edge.splice(nodeIndex, 1);
    }
  });
  _.each(this.nodes, function(item) {
    if (item.value === node) {
      index = _.indexOf(this.nodes, item);
    }
  });
  this.nodes.splice(index, 1);
};


Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  _.each(this.nodes, function(item) {
    if (item.value === fromNode) {
      if (_.contains(item.edge, toNode)) {
        result = true;
      }
    }
  });
  return result;
};


Graph.prototype.addEdge = function(fromNode, toNode) {
  _.each(this.nodes, function(item) {
    if (item.value === fromNode) {
      item.edge.push(toNode);
    } else if (item.value === toNode) {
      item.edge.push(fromNode);
    }
  });
};


Graph.prototype.removeEdge = function(fromNode, toNode) {
  _.each(this.nodes, function(item) {
    if (item.value === fromNode) {
      var toIndex = _.indexOf(item.edge, toNode);
      item.edge.splice(toIndex, 1);
    }
  });
  _.each(this.nodes, function(item) {
    if (item.value === toNode) {
      var fromIndex = _.indexOf(item.edge, fromNode);
      item.edge.splice(fromIndex, 1);
    }
  });
};

Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function(node) {
    return cb(node.value);
  });
};

var connectToFive = function(item) {
  graph.addEdge(item, 5);
};
/*
 * Complexity: What is the time complexity of the above functions?
 */





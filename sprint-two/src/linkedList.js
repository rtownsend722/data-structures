var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  // list.counter = 0;


  list.addToTail = function(value) {
    var node = Node(value);
    var newIndex = list.counter;
    if (list.head === null) {
      list.tail = node;
      list.head = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
    list[node.value] = node;
    // list.counter = list.counter + 1;
  };

  list.removeHead = function() {
    var tempHead = list.head;
    // var minKey = Math.min.apply(Object.keys(list));
    // delete list[minKey];
    delete list[tempHead.value];
    list.head = tempHead.next;
    return tempHead.value;
  };

  list.contains = function(target) {
    var keys = Object.keys(list);
    return _.contains(keys, target.toString());
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

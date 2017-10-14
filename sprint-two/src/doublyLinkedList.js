var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    node.previous = list.tail;
    if (list.head === null) {
      list.tail = node;
      list.head = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
    list[node.value] = node;  
  };

  list.removeHead = function() {
    var tempHead = list.head;
    delete list[tempHead.value];
    list.head = tempHead.next;
    return tempHead.value;
  };
 
  list.addToHead = function(value) {
    var node = Node(value);
    node.next = list.head;
    list.head.previous = node;
    list.head = node;
  };

  list.removeTail = function() {
    var tempTail = list.tail.value;
    list.tail.previous.next = null;
    list.tail = list.tail.previous;
    return tempTail;
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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */





const LinkedList = require("./linkedlist")
;
const ll = LinkedList.fromValues(10,20, 30);

ll.print();

ll.insertAtIndex(2, 40);

ll.print();
class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    insertAtHead(data){
        const newNode = new LinkedListNode(data, this.head);
        this.head = newNode;
        this.length++;
    }

    getByIndex(idx){
        if(idx < 0 || idx >= this.length){
            return null;
        }
        let curr = this.head;

        for(let i = 0; i < idx; i++){
            curr = curr.next;
        }

        return curr;
    }
    deleteAtHead(){
        this.head = this.head.next
        this.length--
    }

    insertAtIndex(index, value) {
        if (index === 0) return this.insertAtHead(value)

        const prev = this.getByIndex(index - 1)
        if (prev == null) return null

        prev.next = new LinkedListNode(value, prev.next)
        this.length++
    }
    deleteAtIndex(index) {
        if (index === 0) return this.deleteAtHead()

        const prev = this.getByIndex(index - 1)
        if (prev == null) return null

        prev.next = prev.next.next
        this.length--
    }

    print(){
        let output = "";
        let curr = this.head;
        while(curr){
            output = output + curr.val + "->";
            curr = curr.next;
        }
        console.log(output + null);
    }
}

class LinkedListNode {
    constructor(val, next){
        this.val = val;
        this.next = next;
    }
}

LinkedList.fromValues = (...values) => {
    const ll = new LinkedList();
    for(let i = values.length - 1; i >= 0; i--){
        ll.insertAtHead(values[i]);
    }
    return ll;
}
module.exports = LinkedList
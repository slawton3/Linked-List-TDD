const LinkedList = require("./linkedlist");

describe('#insertAtHead', () => {
    test('It adds the element to the beginnning of the list', () => {
        const ll = new LinkedList;
        ll.insertAtHead(10);
        const oldHead = ll.head;
        ll.insertAtHead(20);

        expect(ll.head.val).toBe(20);
        expect(ll.head.next).toBe(oldHead);
        expect(ll.length).toBe(2);
    })
})

describe('#getByIndex', () => {
    describe('with index less than 0', () => {
        test('It returns null', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40, 50, 60);

            expect(ll.getByIndex(-1)).toBeNull();
        })
    })
    describe('with index greater than list length', () => {
        test('It returns null', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40, 50, 60);

            expect(ll.getByIndex(10)).toBeNull();
        })
    })
    describe('with index 0', () => {
        test('It returns the head', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40, 50, 60);

            expect(ll.getByIndex(0).val).toBe(10);
        })
    })
    describe('with index in middle', () => {
        test('It returns the element at the index', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40, 50, 60);

            expect(ll.getByIndex(2).val).toBe(30);
        })
    })
})

describe('#insertAtIndex', () => {
    describe('with index less than 0', () => {
        test('does not insert', () => {
            const ll = LinkedList.fromValues(10, 20, 30);
            ll.insertAtIndex(-1, 40);
            expect(ll.length).toBe(3);
        })
    })
    describe('with index greater than list length', () => {
        test('does not insert', () => {
            const ll = LinkedList.fromValues(10, 20, 30);
            ll.insertAtIndex(4, 40);
            expect(ll.length).toBe(3);
        })
    })
    describe('with index 0', () => {
        test('insert at the head', () => {
          const ll = LinkedList.fromValues(10, 20)
          ll.insertAtIndex(0, 30)
    
          expect(ll.head.val).toBe(30)
          expect(ll.head.next.val).toBe(10)
          expect(ll.length).toBe(3)
        })
    })
    describe('insert in middle', () => {
        test('insert index', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40);
            ll.insertAtIndex(2, 50);
            const node = ll.getByIndex(2)

            expect(node.val).toBe(50);
            expect(node.next.val).toBe(30);
            expect(ll.length).toBe(5);
        })
    })
})

describe('#deleteAtIndex', () => {
    describe('with index less than 0', () => {
        test('does not delete', () => {
            const ll = LinkedList.fromValues(10, 20, 30);
            ll.deleteAtIndex(-1);
            expect(ll.length).toBe(3);
        })
    })
    describe('with index greater than list length', () => {
        test('does not delete', () => {
            const ll = LinkedList.fromValues(10, 20, 30);
            ll.deleteAtIndex(4);
            expect(ll.length).toBe(3);
        })
    })
    describe('with index 0', () => {
        test('delete at the head', () => {
          const ll = LinkedList.fromValues(10, 20, 30)
          ll.deleteAtIndex(0)
    
          expect(ll.head.val).toBe(20)
          expect(ll.head.next.val).toBe(30)
          expect(ll.length).toBe(2)
        })
    })
    describe('delete in middle', () => {
        test('delete index', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40, 50);
            ll.deleteAtIndex(2);
            const node = ll.getByIndex(2);

            expect(node.val).toBe(40);
            expect(node.next.val).toBe(50);
            expect(ll.length).toBe(4);
        })
    })
})
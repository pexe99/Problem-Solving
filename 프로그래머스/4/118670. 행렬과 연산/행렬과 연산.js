class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    pushFront(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    pushBack(value) {
        const newNode = new Node(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    popFront() {
        if (!this.head) return null;
        const value = this.head.value;
        this.head = this.head.next;
        if (this.head) this.head.prev = null;
        else this.tail = null;
        this.size--;
        return value;
    }

    popBack() {
        if (!this.tail) return null;
        const value = this.tail.value;
        this.tail = this.tail.prev;
        if (this.tail) this.tail.next = null;
        else this.head = null;
        this.size--;
        return value;
    }

    peekFront() {
        return this.head ? this.head.value : null;
    }

    peekBack() {
        return this.tail ? this.tail.value : null;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    toArray() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
}

function solution(rc, operations) {
    const N = rc.length, M = rc[0].length;
    const left = new Deque();
    const right = new Deque();
    const middle = new Deque();
    rc.forEach((row) => {
        const current = new Deque();
        row.forEach((el, idx) => {
            if(idx === 0) left.pushBack(el);
            else if(idx === M - 1) right.pushBack(el);
            else current.pushBack(el);
        });
        middle.pushBack(current);
    });

    operations.forEach((oper) => {
        if (oper === "ShiftRow") {
            left.pushFront(left.popBack());
            right.pushFront(right.popBack());
            middle.pushFront(middle.popBack());
        } else {
            middle.peekFront().pushFront(left.popFront());
            right.pushFront(middle.peekFront().popBack());
            middle.peekBack().pushBack(right.popBack());
            left.pushBack(middle.peekBack().popFront());
        }
    });
    
    const result = [];
    while(middle.getSize()) {
        result.push([left.popFront(), ...middle.popFront().toArray(), right.popFront()])
    }
    return result;
}

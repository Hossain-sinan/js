class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function linkedListTraversal(ptr) {
    while (ptr !== null) {
        console.log(`Element = ${ptr.data}`);
        ptr = ptr.next;
    }
}

function insertAtFirst(head, data) {
    const newNode = new Node(data);
    newNode.next = head;
    return newNode;
}

function main() {
    let head = new Node(7);
    let second = new Node(11);
    let third = new Node(41);

    head.next = second;
    second.next = third;

    console.log("Before deletion linked list:");
    linkedListTraversal(head);

    console.log("After insertion node:");
    head = insertAtFirst(head, 56);
    linkedListTraversal(head);
}

main();

/*
Nodes:
•has a a piece of data (val) 
•has a reference ot the next node (next)
*/

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null; 
        this.tail = null;
        this.length = 0; 
    }

    push(val){ //means inserting at the end, after the tail 
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode; 
            this.tail = newNode; 
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }        
        this.length ++
        return this  
    }

    pop(){ //removes from the end of a linked list, returns the tail
        if(!this.head) return undefined
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next 
        }
        this.tail = newTail
        this.tail.next = null
        this.length --
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current 
    }

    shift(){ //removes a new node from the beginning of the linked list 
        if(!this.head) return undefined 
        let currentHead = this.head 
        this.head = currentHead.next 
        this.length -- 
        if(this.length === 0){
            this.tail = null 
        }
        return currentHead 

    }

    unshift(val){ //adds a new node from the beginning of the list 
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }
        else{
            newNode.next = this.head 
            this.head = newNode
        }
        this.length++
        return this 
    }

    get(index){ //retrieves a node by its position in a linked list ...
        if(index < 0 || index >= this.length) return null 
        let counter = 0 
        let current = this.head 
        while(counter !== index){
            current = current.next 
            counter ++
        }
        return current 

    }

    set(val, index){ // changing the value of a node based on it's position in a linked list 
        let foundNode = this.get(index)
        if(foundNode){
            foundNode.val = val
            return true 
        }
        return false 

    }

    insert(val, index){ // adding a node to the linked list at a specific position 
        if(index < 0 || index > this.length) return false 
        if(index === this.length) return !!this.push(val) 
        if(index === 0) return !!this.unshift(val)
        let newNode = new Node(val)
        let prev = this.get(index - 1)
        let temp = prev.next 
        prev.next = newNode 
        newNode.next = temp
        this.length ++ 
        return true
    }

    remove(index){ // removing a node from the linked list at a specific position 
        if(index < 0 || index >= this.length) return undefined
        if(index === this.length - 1) return this.pop()
        if(index === 0) return this.shift()
        let prev = this.get(index - 1)
        let removed = prev.next
        prev.next = removed.next
        this.length--
        return removed
    }

    reverse(){ // reversing all the nodes in a linked list 
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
        }
        return this;
      }
      print(){ // this will help us see what is happening in our revered list 
          var arr = [];
          var current = this.head
          while(current){
              arr.push(current.val)
              current = current.next
          }
          console.log(arr);
      }


}

let list = new SinglyLinkedList()
list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)


/*
This is a bad way to reference the next node...

var first = new Node("Hi")
first.next = new Node("there")
first.next.next = new Node("how")
first.next.next.next = new Node("are")
first.next.next.next.next = new Node("you")
*/ 
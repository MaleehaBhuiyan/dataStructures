// Linked list implementation 

class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0 
    }

    push(val){
        let newNode = new Node(val)
        if(this.size === 0){
            this.first = newNode
            this.last = newNode
        }
        else{
            let temp = this.first 
            this.first = newNode 
            this.first.next = temp
        }
        return ++this.size
    }

    pop(){
        if(!this.first) return null 
        let temp = this.first
        if(this.size === 1){
            this.first = null
            this.last = null 
        }
        else{
            this.first = temp.next 
            this.size--
        }
        return temp 
    }
}

let stack = new Stack()
stack.push("FIRST")
stack.push("SECOND")
stack.push("THIRD")
stack.push("FOURTH")




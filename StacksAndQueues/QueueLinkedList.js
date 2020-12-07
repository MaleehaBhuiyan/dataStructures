// linked list implementation 

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(value){
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val){
       let newNode = new Node(val)
       if(!this.first) {
           this.first = newNode
           this.last = newNode
       }
       else{
           this.last.next = newNode
           this.last = newNode
       }
       return ++this.size 
    }

    dequeue(){
        if(!this.first) return null
        let temp = this.first 
        if(this.first === this.last){
            this.last = null 
        }
        this.first.next = this.first 
        this.size--
        return temp

    }
}

let q = new Queue()
q.enqueue("FIRST")
q.enqueue("SECOND")
q.enqueue("THIRD")
q.enqueue("FOURTH")
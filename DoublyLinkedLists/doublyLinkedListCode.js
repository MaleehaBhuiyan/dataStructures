class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev= null;
    }
}


class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val){
        let node = new Node(val)
        if(this.length === 0){
            this.head = node 
            this.tail = node 
        }
        else{
            this.tail.next = node
            node.prev = this.tail 
            this.tail = node 
        }
        this.length++
        return this 
    }

    pop(){
        if(!this.head) return undefined
        let poppedNode = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        }
        else {
            this.tail = poppedNode.prev 
            this.tail.next = null 
            poppedNode.prev = null
        }
        this.length--
        return poppedNode
    }

    shift(){
        if(this.length === 0) return undefined
        let oldHead = this.head 
        if(this.length ===1){
            this.head = null
            this.tail = null
        }
        else{
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null 
        }
        this.length--
        return oldHead
    }

    unshift(val){
        let node = new Node(val)
        if(this.length === 0){
            this.head = node 
            this.tail = node 
        } 
        else{
            this.head.prev = node 
            node.next = this.head 
            this.head = node 
        }
        this.length++
        return this

    }

    get(index){
        if(index < 0 || index >= this.length) return null 
        if(index <= this.length/2){
            let count = 0 
            let current = this.head
            while(count != index){
                current = current.next 
                count++ 
            }
            return current 
        }else{
            let count = this.length - 1 
            let current = this.tail 
            while(count != index){
                current = current.prev
                count-- 
            }
            return current 
        }
        
    }

    set(index, val){
        let foundNode = this.get(index)
        if(foundNode != null){
            foundNode.val = val 
            return true 
        }
        return false 
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false 
        if(index === 0) return !!this.unshift(val)
        if(index === this.length) return !!this.push(val) 
       
        let prevNode = this.get(index - 1)
        let nextNode = prevNode.next 
        let newNode = new Node(val)
       
        newNode.prev = prevNode
        prevNode.next = newNode
        newNode.next = nextNode
        nextNode.prev = newNode 
       
        this.length++
        return true 
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
        let removedNode = this.get(index)
        let prevNode = removedNode.prev
        let nextNode = removedNode.next
        prevNode.next = nextNode
        nextNode.prev = prevNode
        removedNode.next = null
        removedNode.prev = null 
        this.length--
        return removedNode
    }

}


//EXAMPLE

let list = new DoublyLinkedList()
list.push("Harry")
list.push("Hermione")
list.push("Ron")
list.push("Hagrid")
list.push("Ginny")
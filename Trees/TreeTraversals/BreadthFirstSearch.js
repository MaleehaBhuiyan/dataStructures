class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(value){
        let newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
            return this
        }
        else{
            let current = this.root
            while(true){
                if(value === current.value) return undefined 
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode
                        return this
                    } else {
                        current = current.left 
                    }
                }
                else if(value > current.value){
                    if(current.right === null){
                        current.right = newNode
                        return this
                    }
                    else {
                        current = current.right 
                    }
                }
            }
        }
    }

    find(value){
        if(this.root === null) return false 
        let current = this.root
        let found = false 
        while(current && !found){
            if(value < current.value){
                current = current.left 
            } else if(value > current.value){
                current = current.right 
            } else {
                return true 
            }
        }
        return false 
    }

    // WHAT WE ADD HERE IS NEW, THIS IS PREVIOUS WRITTEN CODE FROM BINARY DEARCH TREES 

    BFS(){
        let data = []
        let queue = []
        let node = this.root 
        
        queue.push(node)
        while(queue.length){
            node = queue.shfit()
            data.push(node.value)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data
        
    }
}

let tree = new BinarySearchTree
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
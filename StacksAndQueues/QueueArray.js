// building a queue with an array 


// using a combination of push and shift. First item in will be the first item out. This is not the best way because everything will need to be reindexed 

let queue = []

queue.push("FIRST")
queue.push("SECOND")
queue.push("THIRD")

queue.shift()

// using a combination of unshift and pop. This is a better way because we are removing from the end, so no reindexing required


queue.unshift("FIRST")
queue.unshift("SECOND")
queue.unshift("THIRD")

queue.pop()


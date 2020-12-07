// Array implementation 

// WAY 1: using push and pop together on an array, creates a stack [adding from the end, removing from the end]

let stack = []

stack.push("google.com")

stack.push("instagram")

stack.push("youtube")

stack.pop() 

// WAY 2: using unshift and shift together on an array, creates a stack [adding from the beginning, starting from the beginning]

stack.unshift("create new file")

stack.unshift("resized file")

stack.unshift("clones out wrinkle")

stack.shift()

// DIFFERENCE: adding and removing from the beginning of an array is not the best when it comes to time complexity. When we add or remove from the beginning of an array, we have to shift all the elements in an array to create that new space. Adding and removing from the end of an array is more efficient because we are just creating a new space at the end of the array, there is no shifting of elements happening. 


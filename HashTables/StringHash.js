// a hash that works on strings only 

function hash(key, arrayLen){
    let total = 0;
    for (let char of key){
        // map "a" to 1, "b" to 2, "c" to 3, etc.
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen
    }
    return total 
}

/*
Current Problems with this Hash function: 
1) Only hashes strings (we won't worry about this)
2) Not constant time - linear in key length 
3) Could be a little more random, the data can be clustered easily 

*/

function hash(key, arrayLen){
    let total = 0
    let WEIRD_PRIME = 31 
    for (let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i]
        let value = char.charCode(0) - 96 
        total = (total * WEIRD_PRIME + value) % arrayLen
    }
    return total 
}
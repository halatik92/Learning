function findNb(m) {
    let result = 0
      let count = 0
    let n = 1
    while (result < m) {
        result += n**3
        count++
        n++ 
        
    }
    if (result == m) { return count
        
    } else {
         return (-1)
    }
}
console.log(findNb(4183059834009))
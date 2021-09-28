function solution(string) {
    let  str1 = string
    let re = /[A-Z]/g
    result = ''
    for (let i = 0; i < str1.length; i++) {
        if (str1[i].search(re) != -1) {
           result += ' ' + str1[i]
        } else {
            result += str1[i]
        }
       
        
    }

 return result
}

console.log(solution('camelCasing'))
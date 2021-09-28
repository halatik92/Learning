function expandedForm(num) {
    let newStr = num.toString().split('') ;     
    for (let i = 0; i < newStr.length; i++){
        for (let x = newStr.length - i; x > 1; x--){
            newStr[i] += '0';
            }
    }
    newStr = newStr.filter(value => !value.startsWith(0))
    return newStr.join('+');
} 
console.log(expandedForm(70304)) 



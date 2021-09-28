let numbers = [1, 10, -3, 22, -2, 0]

function summa(arr){
    let result = 0
    for( let i = 0; i < arr.length; i++){
    if (arr[i]<0) {
        result += arr[i]
    }
}return result
}
console.log(summa(numbers))
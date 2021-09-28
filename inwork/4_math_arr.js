function sumTwoSmallestNumbers(arrnumbers) => {
    let a = Math.min(...arrnumbers);
    let index = arrnumbers.indexOf(a);
    while (index > -1) {
        arrnumbers.splice(index, 1);
        index = arrnumbers.indexof(a);
    }
    let b = Math.min(...arrnumbers);
    return (a + b);
}

console.log(sumTwoSmallestNumbers([2, 15, 43, 55, 78, 11102]));
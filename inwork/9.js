function sqare(number) {
    return +Array.from(number.toString(), v => v * v).join('');
}

console.log(sqare(9119));
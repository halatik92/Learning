function shortName(str) {
    let arr = str.split(' ')
    let st = ''

    for (let i = 0; i < arr.length; i++) {
        st += arr[i].slice(0, 1) + '. '

    }
    return st.slice(0, 5)
}
console.log(shortName("Alex Smith"))
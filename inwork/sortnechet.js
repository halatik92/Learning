
function sortArray(arr){
const odd = arr.filter(x => x%2 !== 0).sort((a, b) => a - b); 
let i = 0,
  result = [];
arr.forEach(y => {
  if (y%2 === 0) {
    result.push(y)
  } else {
    result.push(odd[i]);
    i++;
  }
});
return result
} 
console.log(sortArray([ 1, 11, 2, 8, 3, 4, 5 ]));
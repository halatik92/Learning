
function getYes(a,b){
let newArr = a.filter(d => !b.includes(d));

return newArr;
};
console.log(getYes([1,2,3], [1,2]));
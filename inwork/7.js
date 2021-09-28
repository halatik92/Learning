// let sum = (numb) => {
//     let summa = Number;
//     let newArr = [];
//     let reducer = (a,b) => parseInt(a) + parseInt(b) ;              
//         while (summa < 10) {
//             let newstr = String(numb);
//             let newArr = newstr.split('');
//             summa = newArr.reduce(reducer);
           
//         };
//     };  return summa;
   
// console.log(sum(15));

function digitalRoot(number) {
    let sum = number ;
    let arr = [];
    let reducer = (a,b) => parseInt(a) + parseInt(b);
 
    while (sum > 9) {
       arr = sum.toString().split("");
       sum = arr.reduce(reducer);
    } 
 
   return sum;
 }
 
  console.log(digitalRoot(98855477855));
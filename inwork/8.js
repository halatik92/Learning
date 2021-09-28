function digitalRoot(number) {
    let result = number;
    let arr = [];

       arr = result.toString().split("").sort().reverse();
       result = arr.toString().replace(/,/g, '');
       result = 1*result;
      

   return arr.join("");
 }
 
  console.log(digitalRoot(42145 ));
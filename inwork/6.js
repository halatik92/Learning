let MinLength = (str) => { 
    let newArr = str.split(' ');
    let newArr2 = newArr.map(i=>i.length);
    let short = Math.min(...newArr2);
         return short;
  };
  console.log(MinLength('bitcoin take over the world maybe who knows perhaps'));

//   const findShort = str => Math.min(...str.split(' ').map(x => x.length))
// console.log(findShort("The quick brown fox ju map"))
  
 

const sumTwoSmallestNumbers = ( arrNumbers ) => { 
    let  a = Math.min(...arrNumbers)
    let  index = arrNumbers.indexOf(a)
        while (index > -1) {
            arrNumbers.splice(index, 1)
            index = arrNumbers.indexOf(a)
        }
        let b =Math.min(...arrNumbers)
         c = (a + b)
         return `Sum should be ${c}`
  }
 
  
  console.log(sumTwoSmallestNumbers([8, 23, 15, 33, 55]))
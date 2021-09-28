function getMiddle(s)
{
 let  newarr = s.split('')
  let result = []
  let len = newarr.length
  if (len % 2 == 0) {
    result.push(newarr[len/2-1], newarr[len/2])  
   return result.join('')
  } else {
    result.push(newarr[len/2 - 0.5])  
    return result.join('')
   
  }
  
} 
console.log(getMiddle('testi'))
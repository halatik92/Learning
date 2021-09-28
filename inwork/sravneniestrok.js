function mix(s1, s2) {
  let  str1 = s1.toLowerCase().replace(/[ ,!.&<>'"]/g, '');
  let  str2 = s2.toLowerCase().replace(/[ ,!.&<>'"]/g, '');
  let strarr1 = str1.split('').sort();
  let strarr2 = str2.split(' ').sort();
  result1 = []
  result2 =[]
  for(let i= strarr1.length; i >= 0; i--){
    for(let j=0; j <= strarr1.length; j++){
        // console.log(strarr1[i])
        // console.log(strarr1[j])
      if (strarr1[i] == strarr1[j]){
          result1.push(strarr1[i])
      }
    }
}
  console.log(strarr1)
  console.log(result1)



  }


  console.log(mix("Are they here", "yes, they are here"));
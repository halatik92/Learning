function spinWords(string) {
let newArr = string.split(' ')
let result = ""
 for (let i = 0; i < newArr.length; i++) {  
    i>=1 && i<newArr.length ? result += " ": result = result
    newArr[i].length >= 5 ? 
    result += " " + newArr[i].split("").reverse().join("")
    : result += newArr[i]}
   
    return result
     }
console.log(spinWords("Welcome"))

// function spinWords(backward) {

//     var sentence = "";
//     var separate = backward.split(" ");
    
//     for (var i = 0; i < separate.length; i++) {
//       if (sentence) sentence += ' ';
//       if (separate[i].length >= 5) {
//         sentence += separate[i].split("").reverse().join("");
//       } else {
//         sentence += separate[i];
//       }
//     }
//     return sentence;
//   }
  
//   console.log(spinWords("Hey fellow warriors"));
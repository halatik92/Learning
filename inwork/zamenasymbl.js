function htmlspecialchars(formData) {
    let newStr = ''
    let symb1 = /</g
    let symb2 = />/g
    let symb3 = /"/g
    let symb4 = /&/g
     newStr = formData.replace(symb4, '&amp;') .replace(symb1, '&lt;').replace(symb2, '&gt;').replace(symb3, '&quot;')
     return newStr    
        }
     console.log(htmlspecialchars("<h2>Hello World</h2>"))   
    

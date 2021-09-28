function list(arr){
    let len = arr.length;
    if(len==0) return '';
    return arr.slice(0, len-1).map(p=>p.name).join(", ") + (len>1 ? ' & ' : '') + arr[len-1].name;
  }
  console.log( list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]) )
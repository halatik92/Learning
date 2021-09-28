function songDecoder(song){
  let newArr = song.split('WUB');
  let normal = newArr.filter(x => x.length>=1);
  return normal.join(' ');
}


console.log(songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'));
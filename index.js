function writeCards(gifts, eventName) {
  let thanks = []
  for(let i=0; i < gifts.length; i++) {
    let msg = `Thank you, ${gifts[i]}, for the wonderful ${eventName} gift!`
    thanks.push(msg);

  }
  return thanks
}


function countDown(){
  for(let i = 10; i > -1; i--){
    console.log(i);
  }
}
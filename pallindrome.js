function pallindrome(str){
  let bag="";
  for(let i=str.length-1;i>=0;i--){
    bag+=i;
  }
  if(bag){
    console.log(str,"is pallindrome");
  }else{
    console.log(str,"is not pallindrome");
  }
}
pallindrome("masai");
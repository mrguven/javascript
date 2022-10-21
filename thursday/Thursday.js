let asd = 'sba aba';
let asd1 = 'aba aba';





function myFunction (a,b) {
    if ( a === b ){
       return (true);
    }
    else {
       return (false);
        }
       
        
       
};
   
  console.log(myFunction(asd, asd1));




const string = "kayak";

function isPalindrome(str) {
   let reversed = [];
   for (let i = 0;i< string.length;i++){
   
   reversed[i] = string[string.length-1-i];
   reversed[i]=reversed.join("");
  
}

   
if(string===reversed){
   return true}
   else {
      return false
   }

   

}

console.log(isPalindrome(string))

/*

  function colorFuntion (color){
   if ( color === 'red') {
      return 'stop'
   }
   else if (color === 'yellow') {
      return 'Be aware'
   }
   else if (color === 'green'){
      return 'go'
   }
  }

  console.log(colorFuntion('red'));
  */
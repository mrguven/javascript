//1- addition



for(let i = 200; i <= 2701; i++){

if (((i % 3 ===0) || (i % 5 ===0)) && !(i % 15==0 )) {
    
    console.log(i);
}}


//2- Shift

let array = [2,1,6,4,-7];

for (let a = 4;   0 <= a ;a--) {
    
    console.log(array[a] )
}


//3- FizzBuzz



var arr = [];

for (let d = 1; d < 136; d++) {
   arr.push(d);
}



for (let d = 1; d < 136; d++){
    if (arr[d] % 3 ==0) {
       
        arr[d] = 'Fizz';
  
    }

    else if (arr[d] % 5 ==0) {
        arr[d] = 'Buzz';
    }

    else if (arr[d] % 15 ==0) {
        arr[d] = 'FizzBuzz';
    }
}

console.log(arr);


//4- Fibonacci 

let a = 0;
let b = 1;
let c = 0;


while (a <100){
   
    a = b + c;
    c = b;
    b = a;

    console.log(a);
    
   
    
}


 //5- Remove

 let newArr = [1,-2,4,1];


     
 let ar = newArr.filter(item => !(item < 0));
 console.log(ar);


 //6- Comminist???/
/*

 let Comminist = ['Man', 'I','Love','The','Matrix','Program'];

let i = Comminist.length-1; 
  Comminist = Comminist[i].replace('','*')


console.log(Comminist)

 let newCom = Comminist[Comminist.length-1];

 let lasCom = newCom.split('');



 console.log(lasCom);
 */


 






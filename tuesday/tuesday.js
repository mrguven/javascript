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


 //6- Comminist??? I could not do that


 

 

  function replaceWithStar(word) {
    let X = ['Man', 'I','Love','The','Matrix','Program'];
    for (i=0; i<X.length; i++) {
    if (X[i] === word) {
    let starWord="";
    for(j=0; j<word.length; j++) {
    starWord += "*";
    }
    X[i] = starWord;
    }
    }
    return X;
}

    console.log(replaceWithStar('Program'));



    



 






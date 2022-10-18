
console.log('//1'); /// there are head of problem


for (var i = 0; i < 136; i++) {
    console.log(i);
}



console.log('//2'); //head

for (var i = 1; i < 136; i+=2) {
    console.log(i);
}


console.log('//3'); // head


let sum = 0;
for (var i = 0; i < 136; i++) {
    sum  = sum +  i ;
    console.log('Number is: ' + i + ' Sum: ' +  sum );
}




console.log('//4');


const xar = [1,4,2,12];
for (let m = 0; m < xar.length; m++)
console.log(xar[m]);
console.log('//5');
const xy = [2,-3,-1];
console.log(Math.max(...xy));  //what means three point and is there ant other methods?


console.log('//6');


const xyz = [2,1,3];

const c = 0;
const average = xyz.reduce((a,b) => a + b,c);
console.log(average / xyz.length)

//another way to solve the problem
let = mrs = 0;
for(let asd = 0; asd <xyz.length; asd++){
    mrs = xyz[asd] + mrs
}
console.log(mrs / xyz.length);




console.log('//7');


const negative = [2,-1,4,-3];
for (let i = 0; i < negative.length;i++){
    if(negative[i] < 0) {
        negative[i] = 0;
    }
}
console.log(negative);



console.log('///8');



let numberString = [1,-4,0,-1];
for (let n = 0; n < numberString.length; n++){
    if(numberString[n] < 0 ) {
        numberString[n] = 'Turing';
    }
}

console.log(numberString);
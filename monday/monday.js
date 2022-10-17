/*1


for (var i = 0; i < 136; i++) {
    console.log(i)
}


//2

for (var i = 1; i < 136; i+=2) {
    console.log(i)
}

*/


console.log('//3');


let sum=0;

for (var i = 0; i < 136; i++) {
    sum  = sum +  i;
}

console.log('Number is: ' + i + ' Sum: ' +  sum + "</br>");




console.log('//4');


const xar = [1,4,2,12];


    console.log(xar);




console.log('//5');

const xy = [2,-3,-1];

console.log(Math.max(...xy));  //what means three point and is there ant other methods?


console.log('//6');


const xyz = [2,1,3];



const c = 0;

const average = xyz.reduce((a,b) => a + b,c);

console.log(average / xyz.length)


console.log('//7');

const negative = [2,-1,4,-3];


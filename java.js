
console.log ('Hello World');
console.error('this is error');


// (var), let, const 

// const age = 31;


 let age1 = 30;
age1 = 31;

 console.log(age1);


// const score = 10; const must have value,otherwise it gives error


/*


 let score;
 score = 10;
 console.log(score);


 //datatypes// strings, Numbers, Boolean, null, undefined

 let name1 = 'John';

 const age = 30;
const rating = 4.5;
 const isCool = true;

 const x = null;

 const y = undefined;

 let z;

console.log(typeof name1);

console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);


//Concatenation

console.log('My name is ' + name1 + 'and I am ' + age);

//template string 
console.log (`My name is ${name1} and I am ${age}`);

console.log(`My name is ${name1} and I am ${age}` )


const s = 'Hello World!';

console.log(s.length);


console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));
console.log(s.substring(0,5).toUpperCase());

console.log(s.split(''));

const a = 'technology, computers,its,code';
console.log(a.split(','));

*/
//Arrays - variables that hold multiple values

const numbers = new Array(1,2,3,4,5)

console.log(numbers)

const fruits = ['apples', 'oranges', 'pears', 10];

console.log(fruits);  /// if there is a change in de array after console.log, it is not excuted.You should call it again.

//

fruits.push('mangos');
console.log(fruits);
fruits.unshift('strawberries')
console.log(fruits);
fruits.pop();
console.log(fruits);

fruits[4] = 'grapes';
console.log(fruits);

//

console.log(fruits[1]);

console.log(Array.isArray(fruits));


console.log(fruits.indexOf('oranges'));




//object

const person = {
    firstName:'John',
    lastName: 'Doe',
    age:30,
    hobbies: ['music', 'movies', 'sport'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state:'MA'
    }

};

console.log(person);
console.log(person.firstName);




console.log(person.firstName,person.lastName);

console.log(person.hobbies[1]);
console.log(person.hobbies);

console.log(person.address.city);
person.email = 'john@gamil.com';
console.log(person);

const todos = [
    
    {id:1,
        text: 'Take out trash',
        isComplate:true
    },

    {id:2,
        text: 'Meeting with boss',
        isComplate:true
    },

    {id:3,
        text: 'Denstist appt',
        isComplate:false
    },
];

console.log(todos[0].id);
console.log(todos[2].text);

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);

console.log(todoJSON);

//for

for( let i = 0;i<=10;i++) {
console.log( 'For Loop Number: ' + i);

console.log(`For Loop Number: ${i}`);

}


//while 

let i = 0; //!importent

while ( i<10 ){
console.log(i);
i++;
};






for( let i = 0;i<todos.length;i++) {
    console.log(todos[i].text);
    
}


for (let todo of todos) {
    console.log(todo.id)
}



//forEach , map , filter 


todos.forEach(function(todo) {
    console.log(todo.text)
});

 const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isComplate === true;
});

console.log(todoCompleted);



// jf statement

let x = 4; //strings and number value get different result (===,==)
const y = 10;
if(x === 10) {
    console.log('x is 10');
}   else if (x > 10) {
    console.log('x is greater than 10')
} 
else {
    console.log('x is less than 10')
}


if ( x < 5 || y < 10) {
  console.log('our if function is true' )
}



const x1 = 10;

const color = x > 10 ? 'red' : 'blue';

console.log(color);

const color1 = 'green'
switch (color1) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}


//function

function addNums (num1, num2) {
    console.log(num1 + num2)

};

addNums(5,4);



const func = (xy,yz) => xy + yz;


console.log(func (4,10));




const func1 = (a,b) => a * b;

console.log(func1(5,5));

// Constructor function
function Person (firstName1,lastName1,dob) {
    this.firstName1 = firstName1;
    this.lastName1 = lastName1;
    this.dob = new Date(dob);
    this.getBirthYear = function () {
        return this.dob.getFullYear;
    }

    this.getFullName = function () {
        return `${this.firstName1} ${this.lastName1}`;
    }
}

Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear;
}

Person.prototype.getFullName = function () {
    return `${this.firstName1} ${this.lastName1} `
}



//Class

class Person1 {
    constructor(firstName1,lastName1,dob) {
        this.firstName1 = firstName1;
        this.lastName1 = lastName1;
         this.dob = new Date(dob);
      
    }

    getBirthYear() {
        return this.dob.getFullYear;
    }

    getFullName() {
        return `${this.firstName1} ${this.firstName1}`;
    }

}





// Instatiate object

const person2 = new Person('john','Doen', '4-3-1980');
const person3 = new Person('mary','Smith', '3-6-1970');

console.log(person2.getBirthYear()); 

console.log (person2.getFullName());


console.log(person3.getFullName());



//DOM





































/*

var example;
example = 'some string'

console.log(example);


function myFunction () {
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
}


let x = (a,b) => a * b;

console.log(document.links)

console.all[10].textContend = 'hello';

*/

//getElementById




/*

console.log(document.getElementById ('header-title'));

var headerTitle = document.getElementById(header-title));

.innerText
.textContend

item[1].textContend = 'hello';
item[1].style.backgroundColor = 'yellow';

var li = document.getElementsByTagName ('li');
consol.log (li);


//queryselector

var header = document.querySelector('.header');

header.style.borderBottom = 'solid 4px';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input [type = "submit"]');
submit.value = "send";
*/
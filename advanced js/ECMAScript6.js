/// Exercise  -1-


let user = {
    name: "John",
    years: 30
  }

let {name, years, isAdmin} = user

console.log(name);
console.log(years)

if (isAdmin === undefined){
    console.log(false)
}



/// Exercise  -2-

let milkyway= [];

let visitor =[];



/// Exercise  -3-



console.log('answer: it gives to us Hello John. Because ${} is used to call variable.')

/// Exercise  -4-

let usera ={ name1:'',surname:''};
usera.name1 = "John"; 
usera.surname = "Smith";
usera.name1 = "Pete";

delete usera.name1;
console.log(`my surname is ${usera.surname}`)





/// Exercise  -5-

let answer = "answer of question 5: it is not chage, because const is not change"

console.log(answer)

/// Exercise  -6-


let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
  };

  let {Fred,Ted,Ghaith} = salaries
console.log(Fred+Ted+Ghaith);



/// Exercise  -7-

let a = 1;
let b = 7;

let sum = (a+b<4) ? result = "Below" : result = "over";

console.log(sum)

/// Exercise  -8-

let message;

let login = "Employee";

(login == "Employee") ? message = "hello" : (login == 'Director') ? message = "Greeting" : (login == '') ? message = "No login" :message="" ;

console.log(message);
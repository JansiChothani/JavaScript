let a=1;  //re assigned but not re decleard  -> block
var b=2;  //re assigned and re decleared  -> function scope
const c=3; //can't be re decleared and re assigned  -> block

// function 

function add(){
    let a=10;
    let b=20;
    return a + b;
}
console.log(add());

//function with perameter

function mul(a,b){
    return a * b;
}
console.log(mul(3,3))

//Arrow function

const add1 = (a,b) => a + b;
console.log(add1(10,10))

const square = x => x * x;
console.log(square(5))

//Loop
//For loop

for(let i=1;i<=5;i++){
    console.log(i);
}

//while loop
let i=11;
while(i<=15){
    console.log(i);
    i++;
}

//do while loop

let n=21;
do{
    console.log(n);
    n++;
}while(n<=25)


//for of loop
let arr=[10,20,30,40,50]
    for(let value of arr){
        console.log(value)
    }

//for in loop
let ar = ["jansi","krisha","nidhi","tanu"]
    for(let v in ar){
        console.log(ar)
    }

//destructuring
const person1={
    fname:'jansi',
    lname:'chothani',
    age:20,
}
const person2={
    fname:"krisha",
    lname:"patel",
}
console.log(person1);
const {fname,lname,age=21} = person2
console.log(fname);
console.log(lname);
console.log(age);

//swap 
let a1=10;
let b1=20;
[a1,b1] = [b1,a1]
console.log(a1)
console.log(b1)

//array

const color = ['red','blue','green','black','pink','white']
const [first,second,third,...extra] = color;
console.log(color)
console.log(first)
console.log(second)
console.log(third)
console.log(extra)


//find even number 

let arr1=[1,2,3,4,5,6,7];
let even = arr1.filter((num1)=> num1 % 2 === 0)
console.log(even)

//merge 2 object

let obj1={name: "nishi"};
let obj2={age:20};

let merge = {...obj1, ...obj2}
console.log(merge);

//largest number

let x = [10,30,20,50,90,70,100]
let max = x[0];
for (let i = 1 ; i < x.length ; i++){
    if(x[i] > max){
        max = x[i];
    }
}
console.log("largest",max);

console.log(isNaN(10));      //false
console.log(isNaN("10"));    //false
console.log(isNaN("Hyy"));   //true

//this keyword
const student={
	   name:"jansi",
	   age:20,
	   introduce: function(){
		console.log("my name is " + this.name);
	   }
	}
	student.introduce(); 

const introduce=()=>{
    console.log("my name " + this.name)
}
introduce()

//default perameter
function greet(name='priti'){
		console.log(`hello ${name}`)
	 } 
	 greet("jansi")  
	 greet()


const student1 = {
  name: "Jansi",
  age: 20
};
for (let key in student1) {
  console.log(key);
  console.log(student1[key]);
}


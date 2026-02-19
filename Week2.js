// Week 2


const p1 = Promise.resolve("First");
const p2 = Promise.resolve("Second");
const p3 = Promise.resolve("Third");

Promise.all([p1, p2, p3])
  .then((result) => {
    console.log(result);
  });


const promise1 = Promise.resolve("Hello..");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, "Have a Good Day!...");
});
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then((values) => { 
  //promis.then() is asynchronous. so it will execute after synchronouse code is executed.
  console.log(values);
  console.log(values[0]);
  console.log(values[1]);
})

const students = [
  { name: "Jansi", age: 20, course: "BCA" },
  { name: "Dipti", age: 21, course: "BCA" },
  { name: "Nency", age: 22, course: "BCA" }
];

console.table(students);



//group and group end 
function loginUser(user) {
  console.group("Login Process");
  console.log("Checking user...");
  console.log("Validating password...");
  console.log("Generating token...");
  console.groupEnd();

  console.group("User Details");
  console.log("Name:...");
  console.log("Age:...");
  console.log("City:...");
  console.groupEnd();
}
loginUser("Jansi");


console.time("Loop Time");

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.timeEnd("Loop Time");




function fetchData() {
  return new Promise((resolve, reject)=>{
    console.log("Fetching Data....");
    let success = true;
    if(success){
      resolve(["Laptop","mobile","Computer","TV"]);
    }
    else{
      reject("Somthing went wrong...");
    }
  })
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));


async function getData(){
  try {
    let product = await fetchData();
    console.log("Getdata");
    console.log(product);
  } catch (error) {
    console.log(error);
  }
}
getData();

async function getData1(){
  try {
    let data = await fetchData();
    console.log("GetData1 :" );
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
      console.log("Execution Completed....");
  }
}
getData1();


function fetchUser(){
  return new Promise((resolve, reject) => {
    let success = true;
    if(success){  
      resolve(["Jansi","Dipti","Nency","Dhuli"]);
    }
    else{
      reject("Somthing went wrong....");
    }
  })
}
fetchUser()
.then((user) => console.log(user));


function Addition(a,b){
  return new Promise((resolve,reject) => {
    if(typeof a !== "number" || typeof b !== "number"){
      reject("Input should be a number...");
    }
    else{ 
      setTimeout(() => {
        resolve(a + b);
      },100);
    }
  })
}
Addition(10,20)
.then((result) => console.log("Addition is : "+ result));
Addition("a",20)
.then((result1) => console.log("Addition is : "+ result1));


function add(a, b) {
  let result = a + b;
  return result;
}

let total = add(5, 10);
console.log(total);


let y = 10;
let z = 20;
debugger;  //that means when we run the code and it will stop at this line and not execute next line until 
              //we click on play button in console.
let sum = y + z;
console.log("Sum using debugger : " +sum);



function calculate(a, b) {
  let sum = a + b;
  let double = sum * 2;
  console.log(double);
}
console.log("Break Point Example : ");
calculate(5, 10);


function test(){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      console.log("Promise Resolved...");
      resolve("Done");
    },3000);
  });
}

let p = test();
console.log(p);

p.then((result) => {
  console.log("Final Result:", result);
});


function add(a, b) {
    return new Promise((resolve, reject) => {
        let sucess = true;
        if (sucess) {
            setTimeout(() => {
                console.log("result is : ", a + b);
                resolve("Addition complete...");
            }, 2000);

        }
        else {
            reject("Addition Failed...");
        }
    })
}

add(5, 5)
    .then((result) => { console.log(result) })
    .catch((error) => { console.log(error) });




async function addition(a, b) {
    try {
        let sum = await (a + b);
        // console.log(sum);
    }
    catch (err) {
        console.log(err);
    }
}
addition(10, 20);


function Age(age) {
    if (age <= 18) {
        throw new Error("You are not eligible to vote...");
    }
    else {
        console.log("You are eligible to vote...");
    }
}

Age(20);

function Age1(a) {
    try {
        if (a <= 18) {
            console.log("You are not eligible to vote...");
        }
        else {
            console.log("you are eligible to vote...");
        }
    }
    catch (err) {
        console.log(err);
    }
}
Age1(40);


function fetchUser() {
    return new Promise((resolve, reject) => {
        let success = true;
        if (success) {
            resolve(["Jansi", "Dipti", "Nency", "Dhuli"]);
        }
        else {
            reject("Somthing went wrong....");
        }
    })
}
fetchUser()
    .then((user) => console.log(user));



function fetchData() {
    return new Promise((resolve, reject) => {
        let success = true;
        if (success) {
            resolve(["Laptop", "mobile", "Computer", "TV"]);
        }
        else {
            reject("Somthing went wrong...");
        }
    })
}
fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));


async function getData() {
    try {
        let product = await fetchData();
        console.log("Getdata");
        console.log(product);
    } catch (error) {
        console.log(error);
    }
}
getData();

async function getData1() {
    try {
        let data = await fetchData();
        console.log("GetData1 :");
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Execution Completed....");
    }
}
getData1();


function calculate(a, b) {
  let sum = a + b;
  let double = sum * 2;
  console.log(double);
}
console.log("Break Point Example : ");
calculate(5, 10);


let y = 10;
let z = 20;
debugger;  
let sum = y + z;
console.log("Sum using debugger : " +sum);


function add(a,b){
    return new Promise((resolved, reject)=>{
        let success = true;
       setTimeout(()=>{
        if(success){
            console.log("Result is : ", a + b);
            resolved("Addition completed..");
        }
        else{
            reject("Addition failed...");
        }
       },3000)
    })
}

 async function add(a,b){
    return new Promise((resolved, reject) => {
        let success = true;
        try{
            setTimeout(() => {
                if(success){
                    let await sum = a+b;
                    console.log("result is : ", sum);
                    resolved("Addition completed..");
                }
                else
            })
        }
    })

 }

// var id;
// id=1010;
// var total_marks;
// total_marks=99;
//  var results =id+total_marks;
//  var name = "shawn"
// console.log(name)
// const a=10;
// const b=30;
// if(a>b){
//     console.log("true")
// }else{
//     console.log("false")
// }


// for(i=0; i<10; i++){
//     console.log("name is shawn")
// }

// const num = [10,20,30,40];
// const num2=num[3]
// num[0]=[15]
// console.log(num)
// num.push(46);
// console.log(num)
// num.pop(46)
// console.log(num ,"after pop")
// const name1 =["rifate_nur "];
// console.log(name1)
// name1.push("shawn")
// console.log(name1)
// name1.pop("shawn")
// console.log(name1)

// 
// console.log(name.includes("shawn"))
// console.log(name.includes("stark"))
// console.log(name.indexOf("mark"))
// name.push("stark")
// console.log(name.includes("stark"))

// const name=["shawn" ,"mark","boss","hiese"];
// const id=[10,20,30,40];
// console.log(name.concat(id))
// const id= [10,20,30,40];
// console.log(id)
// for(const ids of id){
//     console.log(ids)
// }

// let num =0;
// while(num < 7){
//     console.log('shawn',num);
//     num ++;
// }
// let name2 = [10,11,12,13,14,15,16,17,18];
// for(let i=0; i < name2.length; i++){
//     console.log(name2[i]);
//     if(name2[i] %2 ==0){
//         console.log('Even',name2[i]);
//     }else{
//         console.log('Odd',name2[i]);
//     }
    
// }
// const distro={
//     name:"mark",
//     age:30,
//     id:'01012',

// };
//  distro.console.log(distro.name)
// console.log(distro.name)

// as
// function mark(number){
//     console.log(number)
// }
// mark(20);
// function sub (num1,num2){
//     const result =num1-num2;
//     console.log(result)
// }
// sub(20,10);
// function add (a,b){
//     const result = a+b;
//     return result;
// }
 
// console.log(add(10,20));
// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//     console.log(i);
//  }, 100);
// }

// // Payment System Implementation with Modern UI
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// // Middleware setup
// app.use(bodyParser.urlencoded({ extended: true }));


// const a = 10;
// const numbers = [10, 20, 30, 40, 50];
// const person ={
//     name: 'shawn',
//      age: 30,
//       id: 1010
// }
// console.log(person.name , person.age, person.id)
// console.log(numbers[3])


class animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
class dog extends animal{
    constructor(name,age,breed){
        super(name,age);
        this.breed = breed;
    }
}

// const cat = new animal('CAT', 10);
// const dod =new dog('DOG', 20, 'BULLDOG');
// console.log(cat.name, cat.age);
// console.log(dod.name, dod.age, dod.breed);


// const nums = [1,2,3,4,5];
// let output = nums.filter(n => n%2);
// console.log(output);

// const cube=x=> x*x*x; 
// console.log(cube(2))
// const {x, y, z} = {x: 1, y1: 2, z: 3};
// console.log(y);
// function min(nums) { return Math.min(nums) }
// console.log(min( [1,3,2 ]));

// function work(x, y = 4) {
//     return x + y;
//    }
//    console.log(work(32);

function LoadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())    
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
async function LoadUserAsync(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data);
}
const loadUserArrow =async () =>  {
    const res= await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(data);
}
// arrow function = a concise way to write function expressions good for simple function thatyou use only once (parameters) => some code

// const hello = function(){
//     console.log("hello");
    
// }
// hello()

const hello = (name, age) =>{
    console.log(`hello ${name} `);
    console.log(`your age is ${age}`);
    
    
}
hello("khemraj",20)//this is function

setTimeout(function(){
    console.log("world");
    
},3000)

setTimeout( ()=> console.log("hello"),3000);

const number = [2,3,4,5,6,7]
const square =number.map((element)=> Math.pow(element,2))
const queb = number.map((element)=> Math.pow(element,3))
const evenNum = number.filter((element)=> element % 2 === 0)
const oddNum = number.filter((element) => element % 2 !== 0)

const Total = number.reduce((accumelator, element)=> accumelator + element)
console.log(square);
console.log(queb);
console.log((evenNum));
console.log(oddNum);
console.log(Total);






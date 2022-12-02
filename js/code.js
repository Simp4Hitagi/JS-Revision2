// ===Unary Operator=== 
// add it in front of string number value: (+x + +y) 
// let x = document.querySelector('#num1').value;


// ===Reduce===
let numbers = [1,2,3,4,5];
let sum = numbers.reduce((a, b)=>{
    return a + b;
})
console.log(`Sum: ${sum}`);

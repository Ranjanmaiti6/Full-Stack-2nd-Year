
// let a = prompt("Enter First No: ");
// let b = prompt("Enter Second No: ");
// let ch = prompt("Enter Operator: ");

// let ans = 0;
// if(ch=='+'){
//     ans = a+b;
// }
// else if(ch=='-'){
//     ans = a-b;
// }
// else if(ch=='*'){
//     ans = a*b;
// }
// else if(ch=='/'){
//     ans = a/b;
// }
// else{
//     alert("Invalid Operation");
// }
// alert(`Ans is: ${ans}`)


let btn = document.querySelector('button').value;
let op = document.getElementById('op').value;

let a,b,op;
btn.addEventListener('click',(e)=>{
    a = e.value;
})
btn.addEventListener('click' , (e)=>{
    b = e.value;
})
btn.addEventListener('clck', (e)=>{
    op = e.value;
})

let ans =a+op+b;
console.log(ans);
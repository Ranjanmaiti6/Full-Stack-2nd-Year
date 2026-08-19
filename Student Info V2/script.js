let an = document.querySelector('h1');

function multiply(){
    let a = prompt("Enter A: ");
    let b = prompt("Enter B: ");
    return(a*b);
}
let res = multiply();
console.log(res);
an.innerText = res;

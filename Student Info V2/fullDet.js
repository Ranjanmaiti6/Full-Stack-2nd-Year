let name = document.getElementById('name').value;
let roll = document.getElementById('roll').value;
let m1 = document.getElementById('m1').value;
let m2 = document.getElementById('m2').value;
let m3 = document.getElementById('m3').value;
let m4 = document.getElementById('m4').value;
let m5 = document.getElementById('m5').value;

let btn  = document.querySelector('button')
btn.addEventListener(onclick) = (e) => {

}

let total = m1+m2+m3+m4+m5;
let per = (total*100)/500;
let grade;
if(per>90){
    grade = "A";
}
else if(per>70){
    grade = "B";
}
else if(per>60){
    grade = "C";
}
else{
    grade = "Fail";
}


function calculateScore(){

let score=0;

const answers={
q1:"a",
q2:"b",
q3:"a",
q4:"b",
q5:"c"
};

for(let question in answers){

let option=document.querySelector('input[name="'+question+'"]:checked');

if(option && option.value===answers[question]){
score++;
}

}

document.getElementById("result").innerHTML=
"You scored "+score+" out of 5";

}
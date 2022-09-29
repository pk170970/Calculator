let input= document.getElementById("input");
const buttons= document.querySelectorAll(".btn");
const clear= document.getElementById("AC");

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        input.value+= button.value;
    })
})

function equate(){
    let exp= eval(input.value);
     input.value= exp;
}

function back(){
    input.value= input.value.slice(0,input.value.length-1);
}


clear.addEventListener("click",()=>{
    input.value="";
})
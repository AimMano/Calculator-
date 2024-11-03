
let buttons=document.querySelectorAll('.button');
let input=document.querySelector('.input');
let string="";
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML=='C'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='D'){
            let newstring=string.substring(0,string.length-1);
            input.value=newstring;
        }
        else{
            string+=e.target.innerHTML;
            input.value=string;
        }
    })
})



    

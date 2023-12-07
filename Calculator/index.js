let string="";
let buttons=document.querySelectorAll('button');
// for(let i=0;i<buttons.length;i++){
// buttons[i]
// }
for(const button of buttons){
    button.addEventListener('click',(e)=>{
if(e.target.innerHTML=="="){
    string=eval(string)
    document.querySelector('input').value=string;

}
else if(e.target.innerHTML=="ch"){
    document.querySelector('input').value="";
    string=""
}
else{

    string=string+e.target.innerHTML;
    // eval(string)
    document.querySelector('input').value=string;
}
    })
}


// let string="";
// let buttons=document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML=="="){
//             string=eval(string);
//             document.querySelector('input').value=string;
//         }
//         else{

//             console.log(e.target)
//             string=string+e.target.innerHTML;
//             document.querySelector('input').value=string;
//         }
//     })
// })
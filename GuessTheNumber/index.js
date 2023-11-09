let btn=document.getElementById('btn');
let output=document.getElementById('outputtext')
let showNumber= document.getElementById("showNumber");
let startGame=document.getElementById("start-btn")
let number;
let showAnswer=document.getElementById('showAnswer');
//adding event
startGame.addEventListener('click',()=>{
    
    number=[Math.floor(Math.random()*100)];
    console.log(number)
    startGame.innerText ="Start Again"
    startGame.style.marginLeft="40%"
    
})

showAnswer.addEventListener('click',()=>{
    // if(showAnswer.checked==true){
        if(number==undefined)alert("Games is not started yet!")
        else alert("I throught you can able to complete this easy task: Answer is: "+ number)
    // }
})
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let input=document.getElementById('userInput').value;
    if(input==number){
       showNumber.innerText= `You win the  match: ${input}`;
    }
else if(input>number){
    showNumber.innerText=`Your guess is too high, please try again :`;
}    
else if (input<number){
    showNumber.innerText=`Your guss is too low , plese try again :`
}
else if(input==number - 10){
    showNumber.innerText = "Congratulations! You're one step closer to winnning :"
}
else if( input==number +10){
    showNumber.innerText = "Congratulations! You're one step closer to winnning : "


}else if(input>100){
    showNumber.innerText="Number is less than :100"
}

})
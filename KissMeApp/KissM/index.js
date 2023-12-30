function moveButton(){
    let x=Math.random() * (window.innerHeight - document.getElementById('button').offsetHeight);
    let y=Math.random() * (window.innerWidth - document.getElementById('button').offsetWidth)
//    let x=Math.random(25) * (100);
    // let y=Math.random(25) * (100)
    document.getElementById('button').style.left=`${y}px`;
    document.getElementById('button').style.top=`${x}px`;
    console.log(document.getElementById('button').style.left=`${y}px`)
   
}
let images=document.querySelectorAll('.imgs');
let counterValue =document.getElementById('i')
images.forEach((image,index)=>{
    image.style.left=`${index * 100}%`
    console.log(image);
})
let counter=0;

function goPrev(){
   if(counter==-images.length+1){
        counter=0;
    }
    else{
        counter--;
        slideImage();
    }
   
    counterValue.innerHTML=counter;
}

function goNext(){
    if (counter == 0) {
        counter = -images.length+1;
        slideImage();
    } else {
        counter++;
        slideImage();
    }
//     counter++;
//     slideImage();
    counterValue.innerHTML=counter;
}


function slideImage(){
    images.forEach(img=>{
        img.style.transform=`translateX(${counter*100}%)`
    })
}




// let leftBtn=document.getElementById('btnLeft');
// let rightBtn=document.getElementById('btnRight');

// let images=document.querySelectorAll('.imgs');



// let counter=0;
// function sliceLeft(){
//     counter--;
// }
// function sliceRight(){
//     counter++;
// }
// leftBtn.addEventListener('click',()=>{
// sliceLeft();
// if (counter != 0) {
//     counter--;
// }
// images.forEach((img,index)=>{
//     img.style.transform=`translateX(${counter*100}%)`
//    console.log(images.length) 
//    if(counter<=-7){
    
//     img.style.transform=`translateX(${0*100}%)`
//    }
// })
// counterValue.innerHTML=counter;

 
// })

// rightBtn.addEventListener('click',(e)=>{
//     sliceRight();
//     if (counter < slides.length - 1) {
//         counter++;
//     }

//     images.forEach(img=>{
//      console.log( img.style.transform=`translateX(${counter*100}%)`)
    
     
//     })
   
//     counterValue.innerHTML=counter;
// })


// let counterValue=document.getElementById('i')

// // let counter=0;
// // let images=document.querySelectorAll(".imgs")
// // // console.log(images)
// // // for(let img of images){
// // //     img.style.left=`${img * 100}%`;
// // // }
// // // 
// // images.forEach((img,index)=>{
// //     img.style.left=`${index*100}%`
// // // console.log(img)
// // })


// // // let left=document.getElementById('btn1')
// // // let right=document.getElementById('btn2')
// // // left.addEventListener('click',()=>{
// // //    counter++
// // // slideShow()
// // // alert('cliked')
// // // })

// // // function slideShow(){
// // // images.forEach(img=>{
// // //     img.style.transform=`translateX(-${counter*100}%)`
// // // })
// // // }
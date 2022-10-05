
document.addEventListener('DOMContentLoaded', (event) => {


  let z = document.querySelector('.z2')
  z.innerHTML = `
  <div class="boxImages">
  <div class="containerIMG">
    <img class="Ima" id="img1.png" src="images/Page1.png" alt="">
  </div>
  <div class="containerIMG">
    <img class="Ima" id="img2.png"  src="images/Page2.png" alt="">
  </div>
  <div class="containerIMG">
    <img class="Ima" id="img3.png" src="images/Page3.png" alt="">
  </div>
  <div class="containerIMG">
    <img class="Ima" id="img4.png" src="images/Page4.png" alt="">
  </div>
  </div>

  <div class="flexB">
    <div class="trains">
      <div class="zindex">
        <img  class="imagesTrain" src="images/Box1.png"  alt="">
        <div class="g"><img class="Imas" id="img2.png"  src="images/Desk.png" alt=""></div>
        <div class="train1" id="b1"></div>
        
      </div>

      <div class="zindex1">
        <img  class="imagesTrain" src="images/Box2.png"  alt="">
        <div class="g"><img class="Imas" id="img2.png"  src="images/Desk.png" alt=""></div>
      
      <div class="train2" id="b2"></div>
      
      </div>
      <div class="zindex2">
        <img  class="imagesTrain" src="images/Box3.png"  alt="">
        <div class="g"><img class="Imas" id="img2.png"  src="images/Desk.png" alt=""></div>
      
      <div class="train3" id="b3"></div>
      </div>
      </div>

  `




  let b1 = document.getElementById('b1')
  let b2 = document.getElementById('b2')
  let b3 = document.getElementById('b3')
  
  console.log(b1)
  
  let isProverkaTrue = true
  let bImages = document.querySelectorAll('.boxImages')
  
  let arr = ['FalseApp.mp3', 'TrueApp.mp3']
  b1.ondragover = allowDrop
  b2.ondragover = allowDrop
  b3.ondragover = allowDrop
  

  
 
  function allowDrop(e){
  e.preventDefault()
  }
  
  bImages.forEach((i)=>{
   let res = i.querySelectorAll('.containerIMG')
   
    res.forEach((i,index)=>{
     let resa= i.querySelector('img')
     resa.ondragstart = dragFn
     function dragFn(e){
       e.dataTransfer.setData('id', e.target.id)
     }
     b1.ondrop = dropFn1
     function dropFn1(e){
       let item = e.dataTransfer.getData('id')
       console.log(item)
       if(item==='img3.png'){
        fnTrue()
        let a = e.target.id
        let ee = document.getElementById(item)
        ee.style.marginLeft = '32px'
        ee.style.width = '129px'
        ee.style.height = '119px'
        e.target.append(document.getElementById(item))
        ee.draggable = false
       }else{
        fnFalse()
       }
     }
     b2.ondrop = dropFn2
     function dropFn2(e){
       let item = e.dataTransfer.getData('id')
       console.log(item)
       if(item==='img1.png'){
        fnTrue()
        let a = e.target.id
        let ee = document.getElementById(item)
        ee.style.marginLeft = '65px'
        ee.style.marginTop = '15px'
        ee.style.width = '100px'
        ee.style.height = '100px'
        ee.draggable = false
        e.target.append(document.getElementById(item))
       }else{
        fnFalse()
       }
     }
     b3.ondrop = dropFn3
     function dropFn3(e){
       let item = e.dataTransfer.getData('id')
       console.log(item)
       if(item==='img2.png'){
        fnTrue()
        let a = e.target.id
        let ee = document.getElementById(item)
        ee.style.marginLeft = '57px'
        ee.style.marginTop = '15px'
        ee.style.width = '100px'
        ee.style.height = '100px'
        e.target.append(document.getElementById(item))
        ee.draggable = false
       }else{
        fnFalse()
       }
     }

    })
  })
  
  
  
  function fnTrue() {
    if (isProverkaTrue) {
      isProverkaTrue = false;
      let aud = new Audio();
      aud.src = `Sonds/${arr[1]}`;
      aud.play();
      aud.onended = () => {
        isProverkaTrue = true;
  
      };
    }
  
  }
  function fnFalse() {
    if (isProverkaTrue) {
      isProverkaTrue = false;
      let aud = new Audio();
      aud.src = `Sonds/${arr[0]}`;
      aud.play();
      aud.onended = () => {
        isProverkaTrue = true;
  
      };
    }
  
  }
  


    fn()
  function fn (){
    const boxImage = document.querySelectorAll('.boxImages')
    const boxImage1ad = document.querySelector('.boxImages')
  
    boxImage.forEach((i)=>{
    let res = i.querySelectorAll('img')
  
  
    let sorted = [...res].sort(() => Math.random() - 0.5);
  
    boxImage1ad.innerHTML = '';
    
    for (let li of sorted) {
     
      boxImage1ad.appendChild(li);
    }
    })
  }
 

});






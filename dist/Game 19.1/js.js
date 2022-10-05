
let b5 = document.getElementById('b5')
let b6 = document.getElementById('b6')
let b7 = document.getElementById('b7')


let b8 = document.getElementById('b8')
let b10 = document.getElementById('b10')
let b15 = document.getElementById('b15')

let b11 = document.getElementById('b11')
let b12 = document.getElementById('b12')
let b17 = document.getElementById('b17')



let isProverkaTrue = true
let bImages = document.querySelectorAll('.boxImages')

let arr = ['FalseApp.mp3', 'TrueApp.mp3']

b5.ondragover = allowDrop
b6.ondragover = allowDrop
b7.ondragover = allowDrop

b8.ondragover = allowDrop
b15.ondragover = allowDrop
b10.ondragover = allowDrop

b11.ondragover = allowDrop
b12.ondragover = allowDrop
b17.ondragover = allowDrop






function allowDrop(e){
e.preventDefault()
}



bImages.forEach((i)=>{
 let res = i.querySelectorAll('.containerIMG')
 console.log(res)
  res.forEach((i,index)=>{
   let resa= i.querySelector('img')
   resa.ondragstart = dragFn
   function dragFn(e){
     e.dataTransfer.setData('id', e.target.id)
   }
   b5.ondrop = dropFn1
   function dropFn1(e){
     let item = e.dataTransfer.getData('id')
     
     if(item==='img5.png'||item==='img3.png'||item==='img9.png'){
      fnTrue()
      let a = e.target.id
      let c = e.target
      let ee = document.getElementById(item)

      ee.style.width = '60px'
      ee.style.height = '60px'
      ee.style.marginLeft = '75px'
      ee.style.marginTop = '10px'
      e.target.append(document.getElementById(item))
      ee.draggable  = false
     }else{
      fnFalse()
     }
   }
   b6.ondrop = dropFn2
   function dropFn2(e){
     let item = e.dataTransfer.getData('id')
     console.log(item)
     if(item==='img5.png'||item==='img3.png'||item==='img9.png'){
      fnTrue()
      let a = e.target.id
      let ee = document.getElementById(item)
      ee.style.width = '80px'
      ee.style.height = '80px'
      ee.style.marginLeft = '55px'
      ee.style.marginTop = '-20px'
      e.target.append(document.getElementById(item))
      ee.draggable  = false
     }else{
      fnFalse()
     }
   }
   b7.ondrop = dropFn3
   function dropFn3(e){
     let item = e.dataTransfer.getData('id')
     console.log(item)
     if(item==='img5.png'||item==='img3.png'||item==='img9.png'){
      fnTrue()
      let a = e.target.id
      let ee = document.getElementById(item)
      ee.style.width = '60px'
      ee.style.height = '60px'
      ee.style.marginLeft = '55px'
      ee.style.marginTop = '-20px'
      e.target.append(document.getElementById(item))
      ee.draggable  = false
     }else{
      fnFalse()
     }
   }




   b8.ondrop = dropFn8
   function dropFn8(e){
     let item = e.dataTransfer.getData('id')
     console.log(item)
     if(item==='img8.png'||item==='img6.png'||item==='img4.png'){
      fnTrue()
      let a = e.target.id
      let ee = document.getElementById(item)
      ee.style.width = '60px'
      ee.style.height = '60px'
      ee.style.marginLeft = '63px'
      ee.style.marginTop = '0px'
      e.target.append(document.getElementById(item))
      ee.draggable  = false
     }else{
      fnFalse()
     } 
   }
   b10.ondrop = dropFn10
   function dropFn10(e){
     let item = e.dataTransfer.getData('id')
     console.log(item)
     if(item==='img8.png'||item==='img6.png'||item==='img4.png'){
      fnTrue()
      let a = e.target.id
      let ee = document.getElementById(item)
      ee.style.width = '60px'
      ee.style.height = '60px'
      ee.style.marginLeft = '63px'
      ee.style.marginTop = '0px'
      e.target.append(document.getElementById(item))
      ee.draggable  = false
     }else{
      fnFalse()
     } 
   }
   b15.ondrop = dropFn15
   function dropFn15(e){
     let item = e.dataTransfer.getData('id')
     console.log(item)
     if(item==='img8.png'||item==='img6.png'||item==='img4.png'){
      fnTrue()
      let a = e.target.id
      let ee = document.getElementById(item)
      ee.style.width = '60px'
      ee.style.height = '60px'
      ee.style.marginLeft = '63px'
      ee.style.marginTop = '0px'
      e.target.append(document.getElementById(item))
      ee.draggable  = false
     }else{
      fnFalse()
     } 
   }





   b11.ondrop = dropFn11
   function dropFn11(e){
     let item = e.dataTransfer.getData('id')
     console.log(item)
     if(item==='img2.png'||item==='img1.png'||item==='img7.png'){
      fnTrue()
      let a = e.target.id
      let ee = document.getElementById(item)
      ee.style.width = '60px'
      ee.style.height = '60px'
      ee.style.marginLeft = '63px'
      ee.style.marginTop = '0px'
      e.target.append(document.getElementById(item))
      ee.draggable  = false
     }else{
      fnFalse()
     } 
   }
   b12.ondrop = dropFn12
   function dropFn12(e){
     let item = e.dataTransfer.getData('id')
     console.log(item)
     if(item==='img2.png'||item==='img1.png'||item==='img7.png'){
      fnTrue()
      let a = e.target.id
      let ee = document.getElementById(item)
      ee.style.width = '50px'
      ee.style.height = '60px'
      ee.style.marginLeft = '60px'
      ee.style.marginTop = '0px'
      e.target.append(document.getElementById(item))
      ee.draggable  = false
     }else{
      fnFalse()
     } 
   }
   b17.ondrop = dropFn17
   function dropFn17(e){
     let item = e.dataTransfer.getData('id')
     console.log(item)
     if(item==='img2.png'||item==='img1.png'||item==='img7.png'){
      fnTrue()
      let a = e.target.id
      let ee = document.getElementById(item)
      ee.style.width = '50px'
      ee.style.height = '60px'
      ee.style.marginLeft = '60px'
      ee.style.marginTop = '0px'
      e.target.append(document.getElementById(item))
      ee.draggable  = false
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
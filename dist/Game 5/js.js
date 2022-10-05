let b1 = document.getElementById('b1')
let b3 = document.getElementById('b3')
let b2 = document.getElementById('b2')
let b4 = document.getElementById('b4')
let b5 = document.getElementById('b5')
let b6 = document.getElementById('b6')
let b7 = document.getElementById('b7')
let b8 = document.getElementById('b8')
let b9 = document.getElementById('b9')

let isProverkaTrue = true
let bImages = document.querySelectorAll('.boxImages')

let arr = ['FalseApp.mp3', 'TrueApp.mp3']
b1.ondragover = allowDrop
b2.ondragover = allowDrop
b3.ondragover = allowDrop
b4.ondragover = allowDrop
b5.ondragover = allowDrop
b6.ondragover = allowDrop
b7.ondragover = allowDrop
b8.ondragover = allowDrop
b9.ondragover = allowDrop






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
   b1.ondrop = dropFn1
   function dropFn1(e){
     let item = e.dataTransfer.getData('id')
     console.log(item)
     if(item==='img4.png'||item==='img8.png'||item==='img3.png'){
      fnTrue()
      let a = e.target.id
      let ee = document.getElementById(item)
      ee.style.width = '100px'
      ee.style.height = '100px'
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
     if(item==='img4.png'||item==='img8.png'||item==='img3.png'){
      fnTrue()
      let a = e.target.id
      let ee = document.getElementById(item)
      ee.style.width = '100px'
      ee.style.height = '100px'
      e.target.append(document.getElementById(item))
      ee.draggable = false
     }else{
      fnFalse()
     }
   }
   b3.ondrop = dropFn3
   function dropFn3(e){
     let item = e.dataTransfer.getData('id')
     console.log(item)
     if(item==='img4.png'||item==='img8.png'||item==='img3.png'){
      fnTrue()
      let a = e.target.id
      let ee = document.getElementById(item)
      ee.style.width = '100px'
      ee.style.height = '100px'
      e.target.append(document.getElementById(item))
      ee.draggable = false
     }else{
      fnFalse()
     }
   }
   b4.ondrop = dropFn4
   function dropFn4(e){
     let item = e.dataTransfer.getData('id')
     console.log(item)
     if(item==='img5.png'||item==='img2.png'||item==='img9.png'){
      fnTrue()
      let a = e.target.id
      let ee = document.getElementById(item)
      ee.style.width = '100px'
      ee.style.height = '100px'
      e.target.append(document.getElementById(item))
      ee.draggable = false
     }else{
      fnFalse()
     }
   }
   b5.ondrop = dropFn5
   function dropFn5(e){
     let item = e.dataTransfer.getData('id')
     console.log(item)
     if(item==='img5.png'||item==='img2.png'||item==='img9.png'){
      fnTrue()
      let a = e.target.id
      let ee = document.getElementById(item)
      ee.style.width = '100px'
      ee.style.height = '100px'
      e.target.append(document.getElementById(item))
      ee.draggable = false
     }else{
      fnFalse()
     }
   }
   b6.ondrop = dropFn6
   function dropFn6(e){
     let item = e.dataTransfer.getData('id')
     console.log(item)
     if(item==='img5.png'||item==='img2.png'||item==='img9.png'){
      fnTrue()
      let a = e.target.id
      let ee = document.getElementById(item)
      ee.style.width = '100px'
      ee.style.height = '100px'
      e.target.append(document.getElementById(item))
      ee.draggable = false
     }else{
      fnFalse()
     }
   }
   b7.ondrop = dropFn7
   function dropFn7(e){
     let item = e.dataTransfer.getData('id')
     console.log(item)
     if(item==='img1.png'||item==='img6.png'||item==='img7.png'){
      fnTrue()
      let a = e.target.id
      let ee = document.getElementById(item)
      ee.style.width = '100px'
      ee.style.height = '100px'
      e.target.append(document.getElementById(item))
      ee.draggable = false
     }else{
      fnFalse()
     }
   }
   b8.ondrop = dropFn8
   function dropFn8(e){
     let item = e.dataTransfer.getData('id')
     console.log(item)
     if(item==='img1.png'||item==='img6.png'||item==='img7.png'){
      fnTrue()
      let a = e.target.id
      let ee = document.getElementById(item)
      ee.style.width = '100px'
      ee.style.height = '100px'
      e.target.append(document.getElementById(item))
      ee.draggable = false
     }else{
      fnFalse()
     } 
   }
   b9.ondrop = dropFn9
   function dropFn9(e){
     let item = e.dataTransfer.getData('id')
     console.log(item)
     if(item==='img1.png'||item==='img6.png'||item==='img7.png'){
      fnTrue()
      let a = e.target.id
      let ee = document.getElementById(item)
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

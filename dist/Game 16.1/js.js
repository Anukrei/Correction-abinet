let b1 = document.getElementById('b1')
let b3 = document.getElementById('b3')
let b2 = document.getElementById('b2')




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
     if(item==='img8.png'||item==='img6.png'||item==='img5.png'){
      fnTrue()
      let a = e.target.id
      let ee = document.getElementById(item)
      ee.style.width = '100px'
      ee.style.height = '100px'
      e.target.append(document.getElementById(item))
      
      b1.ondragover = null
      ee.id = null
     }else{
      fnFalse()
     }
   }
   b2.ondrop = dropFn2
   function dropFn2(e){
     let item = e.dataTransfer.getData('id')
     console.log(item)
     if(item==='img8.png'||item==='img6.png'||item==='img5.png'){
      fnTrue()
      let a = e.target.id
      let ee = document.getElementById(item)
      ee.style.width = '100px'
      ee.style.height = '100px'
      e.target.append(document.getElementById(item))
      
      b2.ondragover = null
      ee.id = null
     }else{
      fnFalse()
     }
   }
   b3.ondrop = dropFn3
   function dropFn3(e){
     let item = e.dataTransfer.getData('id')
     console.log(item)
     if(item==='img8.png'||item==='img6.png'||item==='img5.png'){
      fnTrue()
      let a = e.target.id
      let ee = document.getElementById(item)
      ee.style.width = '100px'
      ee.style.height = '100px'
      e.target.append(document.getElementById(item))
      
      b3.ondragover = null
      ee.id = null
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
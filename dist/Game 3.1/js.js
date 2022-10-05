let imagesCollect = document.querySelector(".z2");
let round = document.querySelector(".round");

let isProverkaTrue = true;

let arr = [
  "aw.mp3",
  "aw1.mp3",
  "aw2.mp3",
  "aw3.mp3",
  "aw4.mp3",
  "aw5.mp3",
  "aw6.mp3",
  "aw7.mp3",
  "aw8.mp3",
]
let arr1=[]



function Images(arraY) {
  console.log(arraY);
  imagesCollect.innerHTML = `

  <div class="butt">
<button id="prev" >Повторить предыдущий звук</button>
</div>
  <div id="container" class="cont">
  <div class="ImagesBox">
  <img src="images/hty.png"  class='call' alt="">


</div>

</div>
  `;
}







  Images(arr);
  let btn = document.querySelector('.ImagesBox')
  btn.addEventListener('click',()=>{
    if(isProverkaTrue){
      console.log('1')
      fnTrue()
    }
    

  })

  
  let count = undefined

  function fnTrue(){
    isProverkaTrue=false
    count = arr.splice(0,1)
    arr.push(count[0])
    console.log(arr)
    let aud = new Audio();
      aud.src = `Sonds/${count[0]}`;
      aud.play();
      aud.onended = () => {
        isProverkaTrue = true;
          
      };
  }
  
  function fnPrev(){


     
    if(isProverkaTrue) {
      isProverkaTrue=false
      let aud = new Audio();
      aud.src = `Sonds/${count[0]}`;
      aud.play();
      aud.onended = () => {
        isProverkaTrue = true;
      
      };
    } 
    
  }


  prev.addEventListener('click',()=>{
    fnPrev()
  })






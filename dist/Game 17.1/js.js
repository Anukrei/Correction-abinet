let imagesCollect = document.querySelector(".z2");
let round = document.querySelector(".round");

let isProverkaTrue = true;
let count = 0;
let arr = ["aw1.mp3", "aw2.mp3", "aw3.mp3", "aw4.mp3"];

function Images(arraY) {

  imagesCollect.innerHTML = `
  <div class="gradient-border"><div class="d"><img src="images/hty.png" class='pro1' id='sf' alt=""></div> </div> 
  <div id="container" class="cont">

  <div class="boxImg"><img src="images/Page1.jpg" class='pro'id='aw4.mp3'> </div>
  <div class="boxImg"><img src="images/Page2.jpg" class='pro' id='aw3.mp3'class='pro' alt=""></div>
  <div class="boxImg"><img  src="images/Page3.png" class='pro' id='aw2.mp3'alt=""></div>
  <div class="boxImg"><img src="images/Page4.jpg" class='pro' id='aw1.mp3'alt=""></div>  
</div>
<button id="repit">Повторить предыдущий звук</button>
</div>
  `;
}


  
console.log(Images(arr))
  let call = document.querySelector(".pro1");

  let cont = document.querySelectorAll(".cont");
  let repit = document.getElementById('repit')
  

  call.addEventListener("click", () => {
   res = fnTrue()
   repit.addEventListener('click',()=>{
    repitFn(res)
   }) 
  });

  cont.forEach((i) => {
    i.querySelectorAll("img").forEach((i) => {
      i.addEventListener("click", (e) => {
        let a = e.target
        let b = e.target.id
          if(res == b){
            if(a.closest("div").className !== 'd' ){
              a.closest("div").className += " boxTrue";
            } 
          }
      });
    });
  });


function repitFn (item){
  if (isProverkaTrue) {
    isProverkaTrue = false;
    
    let aud = new Audio();
    aud.src = `Sonds/${item}`;
    aud.play();
    aud.onended = () => {
      isProverkaTrue = true;

      
    };
    
  }
}

function fnTrue() {
    let a = undefined
   if (isProverkaTrue) {
    isProverkaTrue = false;
     a = arr.splice(0,1)
    let aud = new Audio();
    aud.src = `Sonds/${a}`;
    aud.play();
    aud.onended = () => {
      isProverkaTrue = true;

      
    };
    
  }
  return a
}
fn()



function fn (){
  const boxImage = document.querySelectorAll('.cont')
  const boxImage1ad = document.querySelector('.cont')

  boxImage.forEach((i)=>{
  let res = i.querySelectorAll('img')


  let sorted = [...res].sort(() => Math.random() - 0.5);

  boxImage1ad.innerHTML = '';
  
  for (let li of sorted) {
   
    boxImage1ad.appendChild(li.closest("div"));
  }
  })
}
let imagesCollect = document.querySelector(".z2");
let round = document.querySelector(".round");

let isProverkaTrue = true;
let count = 0;
let arr = ["Гуси.mp3", "Индейка.mp3", "Качки.mp3", "Куры.mp3","Петух.mp3","Цыплята.mp3"];

function Images(arraY) {

  imagesCollect.innerHTML = `


  <div class="boxCall">
  <div class="d"><img src="images/ppd00.jpg" class='pro12' id='sf' alt=""></div> 
  <div class="gradient-border"><div class="d"><img src="images/hty.png" class='pro1' id='sf' alt=""></div> </div> 
  <button id="repit">Повторить предыдущий звук</button>
  
  
  </div>

  <div class="BoxCont">
  <div id="container" class="cont">

  <div class="boxImg"><img src="images/Page1.png" class='pro'id='Цыплята.mp3'> </div>
  <div class="boxImg"><img src="images/Page2.png" class='pro' id='Петух.mp3'class='pro' alt=""></div>
  <div class="boxImg"><img src="images/Page3.png" class='pro' id='Индейка.mp3'alt=""></div>
  <div class="boxImg"><img src="images/Page4.png" class='pro' id='Куры.mp3'alt=""></div>  
  <div class="boxImg"><img src="images/Page5.png" class='pro' id='Качки.mp3'alt=""></div>  
  <div class="boxImg"><img src="images/Page6.png" class='pro' id='Гуси.mp3'alt=""></div>  
</div>

</div>


    
  </div>



  `;
}


  
console.log(Images(arr))
  let call = document.querySelector(".pro1");

  let cont = document.querySelectorAll(".cont");
  let repit = document.getElementById('repit')
  

  call.addEventListener("click", () => {
   res = fnTrue()
   console.log(res)
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
              sondePositive()
            } 
          }else{
            sondeNegative()
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
let a = undefined
function fnTrue() {
    
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





function sondePositive() {
  if(isProverkaTrue){
    isProverkaTrue= false
    let aud = new Audio();
    aud.src = "Sonds/TrueApp.mp3";
    aud.play();
    aud.onended = () => {
      isProverkaTrue = true;
  }


  };
}

function sondeNegative() {
  if(isProverkaTrue){
    isProverkaTrue= false
    const aud1 = new Audio();
    aud1.id = "aux";
    aud1.src = "Sonds/FalseApp.mp3";
    aud1.play();
    aud1.onended = () => {
      isProverkaTrue = true;
    };
  }

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
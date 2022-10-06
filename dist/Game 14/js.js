let imagesCollect = document.querySelector(".z2");
let round = document.querySelector(".round");

let isProverkaTrue = true;


let arr = ["А.m4a","АЫ.mp3","И.mp3","ИО.mp3","ОЭ.mp3","Ы.mp3","Э.m4a","ЭА.m4a","ЭУ.m4a"
];

function Images(arraY) {

  imagesCollect.innerHTML = `
  <button id = 'btna' class = 'btna' >Повторить предыдущий звук</button>
  <div class="gradient-border"><div class="dfsd">

  <img src="images/hty.png" class='pro1' id='sf' alt=""></div> </div> 

  
  <div class="headdiv">
  <div id="container" class="cont">
  <div class="boxImg"><img src="images/Page1.png" class='pro' id='ЭУ.m4a'alt=""> </div>
  <div class="boxImg"><img src="images/Page2.png" class='pro' id='А.m4a'class='pro' alt=""></div>
  <div class="boxImg"><img src="images/Page3.png" class='pro' id='ЭА.m4a'alt=""></div>
  <div class="boxImg"><img src="images/Page4.png" class='pro' id='АЫ.mp3'</div>  
  <div class="boxImg"><img src="images/Page5.png" class='pro' id='ОЭ.mp3'</div>  
  <div class="boxImg"><img src="images/Page6.png" class='pro' id='Э.m4a'></div>  
  <div class="boxImg"><img src="images/Page7.png" class='pro' id='И.mp3'alt=""></div>  
  <div class="boxImg"><img src="images/Page8.png" class='pro' id='ИО.mp3'alt=""></div>  
  <div class="boxImg"><img src="images/Page9.png" class='pro' id='Ы.mp3'alt=""></div>  
</div>
</div>

  `;
}

  
  Images(arr)
  let call = document.querySelector(".pro1");

  let cont = document.querySelectorAll(".cont");

  call.addEventListener("click", () => {
   res = fnTrue()    
  });

  cont.forEach((i) => {
    i.querySelectorAll("img").forEach((i) => {
      i.addEventListener("click", (e) => {
        let a = e.target
        let b = e.target.id
        console.log(b, res )
          if(res == b){
            sondePositive()
            if(a.closest("div").className !== 'd' ){
              a.closest("div").className += " boxTrue";
            } 
          }else{
             sondeNegative()
          }
      });
    });
  });


let count = undefined
function fnTrue() {
  
  if (isProverkaTrue) {
    isProverkaTrue = false;
    count = arr.splice(0,1)
    arr.push(count)
    let aud = new Audio();
    aud.src = `Sonds/${count[0]}`;
    aud.play();
    aud.onended = () => {
      isProverkaTrue = true;

    };
    
  }
  return count[0]
}

function fnTrue1() {
  
  if (isProverkaTrue) {
    isProverkaTrue = false; 
    let aud = new Audio();
    aud.src = `Sonds/${count[0]}`;
    aud.play();
    aud.onended = () => {
      isProverkaTrue = true;

    };
    
  }
  
}


btna.addEventListener('click',()=>{
  fnTrue1()
})

fn()
function fn (){
  const boxImage = document.querySelectorAll('.cont')
  const boxImage1ad = document.querySelector('.cont')

  boxImage.forEach((i)=>{
  let res = i.querySelectorAll('img')


  let sorted = [...res].sort(() => Math.random() - 0.5);

  boxImage1ad.innerHTML = '';
  
  for (let li of sorted) {
   
    boxImage1ad.appendChild(li.closest('div'));
  }
  })
}

function sondePositive() {
  
  if(isProverkaTrue){
    isProverkaTrue = false;
    let aud = new Audio();
    aud.src = "Sonds/TrueApp.mp3";
    aud.play();
    aud.onended = () => {
      isProverkaTrue = true;
    };
  }

}

function sondeNegative() {
  
  if(isProverkaTrue){
    isProverkaTrue = false;
    const aud1 = new Audio();
    aud1.id = "aux";
    aud1.src = "Sonds/FalseApp.mp3";
    aud1.play();
    aud1.onended = () => {
      isProverkaTrue = true;
    };
  }

}


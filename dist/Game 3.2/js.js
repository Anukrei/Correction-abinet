let imagesCollect = document.querySelector(".z2");
let round = document.querySelector(".round");

let isProverkaTrue = true;

let arr = ["aw.mp3", "aw1.mp3", "aw2.mp3", "aw3.mp3"];

function Images(arraY) {

  imagesCollect.innerHTML = `
  <button id = 'btna'>Повторить предыдущий звук</button>
  <div class="gradient-border"><div class="dfsd">

  <img src="images/hty.png" class='pro1' id='sf' alt=""></div> </div> 
  <div class="headdiv">
  <div id="container" class="cont">

  <div class="boxImg"><img src="images/Groza.jpg" class='pro'id='aw.mp3'alt=""> </div>
  <div class="boxImg"><img src="images/Kap.jpg" class='pro' id='aw1.mp3'class='pro' alt=""></div>
  <div class="boxImg"><img  src="images/Sn.jpg" class='pro' id='aw2.mp3'alt=""></div>
  <div class="boxImg"><img src="images/Sch.jpg" class='pro' id='aw3.mp3'alt=""></div>  
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
          if(res == b){
            if(a.closest("div").className !== 'd' ){
              a.closest("div").className += " boxTrue";
            } 
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
    return count[0]
  }
  
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

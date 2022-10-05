let imagesCollect = document.querySelector(".z2");
let round = document.querySelector(".round");

let isProverkaTrue = true;

let arr = [
  "Page6.png",
  "Page5.png",
  "Page4.png",
  "Page3.png",
  "Page2.png",
  "Page1.png",
].sort(() => {
  return Math.random() - 0.5;
});






function Images(arraY) {
  console.log(arraY);
  imagesCollect.innerHTML = `
  <div id="container" class="cont">
  <div class="numberSocces">

        <p class="SoccesTrue" id='SocTrue'>Правильные ответы: 0</p>&nbsp&nbsp
        <p class="SoccesFalse" id='SocFalse'> Неправильные ответы:0 </p>
         
    </div>

  <div class="imagesBox">
  
    <img src="images/${arraY[0]}"class="imgItem" id= '${arraY[0]}' draggable="true" />
  </div>
  <div class="imagesBox">
    <img src="images/${arraY[1]}" class="imgItem" id= '${arraY[1]}' draggable="true" />
  </div>
  <div class="imagesBox">
    <img src="images/${arraY[2]}"  class="imgItem"id= '${arraY[2]}' draggable="true" />
  </div>
  <div class="imagesBox">
    <img src="images/${arraY[3]}" class="imgItem"id= '${arraY[3]}' draggable="true" />
  </div>
  <div class="imagesBox">
    <img src="images/${arraY[4]}" class="imgItem"id= '${arraY[4]}' draggable="true" />
  </div>
  <div class="imagesBox" id="ball" >
    <img src="images/${arraY[5]}"class="imgItem" id= '${arraY[5]}'draggable="true" />
  </div>
  `;
}


//


  Images(arr);

  let AswerTrue = 0;
  let AswerFalse = 0;

  function AswerTrueFn() {
    AswerTrue++;
    return (document.getElementById(
      "SocTrue"
    ).innerHTML = `Правильные ответы ${AswerTrue}`);
  }




  function AswerFalseFn() {
    AswerFalse++;
    let res =  document.getElementById(
      "SocFalse"
    )

    res.innerHTML = `Неправильные ответы ${AswerFalse}`
    
  }




  let imagesCollectDone = document.querySelectorAll(".cont");

  imagesCollectDone.forEach(() => {
    let imagesItem = this.document.querySelectorAll("img");
    console.log(imagesItem);
    imagesItem.forEach((i, index) => {
      i.addEventListener("click", (e) => {
        
        if ((e.target.id =='Page2.png'||e.target.id =='Page4.png')) {
          
          if (isProverkaTrue) {
            e.target.style.border = '3px solid green'
            AswerTrueFn();
            sondePositive();
          }
        } else {
          if (isProverkaTrue) {
            AswerFalseFn()
            sondeNegative();
          }
        }
      });
    });
    function sondePositive() {
      isProverkaTrue = false;

      let aud = new Audio();
      aud.src = "00397_FbVsvNYg.mp3";
      aud.play();
      aud.onended = () => {
        isProverkaTrue = true;
      };
    }

    function sondeNegative() {
      isProverkaTrue = false;
      const aud1 = new Audio();
      aud1.id = "aux";
      aud1.src = "__kirbydx__wah-wah-sad-trombone.mp3";
      aud1.play();
      aud1.onended = () => {
        isProverkaTrue = true;
      };
    }
  });

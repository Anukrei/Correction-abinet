let imagesCollect = document.querySelector(".z2");
let round = document.querySelector(".round");

let isProverkaTrue = true;

let arr = [
  "Page8.png",
  "Page7.png",
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
  <img src="./images/${arraY[0]}" class="imgItem" draggable="true">
  </div>
  <div class="imagesBox">
  
    <img src="./images/${arraY[1]}"class="imgItem" id= '${arraY[1]}' draggable="true" />
  </div>
  <div class="imagesBox">
    <img src="./images/${arraY[2]}" class="imgItem" id= '${arraY[2]}' draggable="true" />
  </div>
  <div class="imagesBox">
    <img src="./images/${arraY[3]}"  class="imgItem"id= '${arraY[3]}' draggable="true" />
  </div>
  <div class="imagesBox">
    <img src="./images/${arraY[4]}" class="imgItem"id= '${arraY[4]}' draggable="true" />
  </div>
  <div class="imagesBox">
    <img src="./images/${arraY[5]}" class="imgItem"id= '${arraY[5]}' draggable="true" />
  </div>
  <div class="imagesBox" id="ball" >
    <img src="./images/${arraY[6]}"class="imgItem" id= '${arraY[6]}'draggable="true" />
  </div>
  <div class="imagesBox">
    <img src="./images/${arraY[7]}"class="imgItem"id= '${arraY[7]}' draggable="true" />
  </div>
 

</div>
  `;
}
  Images(arr);
  document.body.style.background = 'linear-gradient( rgba(191, 190, 190, 0.8), rgba(181, 181, 181, 0.5) ), url(images/bag.jpg) 100% 100%' 
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
        console.log(e.target.id==='Page5.png')
        if ((e.target.id =='Page1.png'||e.target.id =='Page7.png')) {
          
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
      aud1.src = "av.mp3";
      aud1.play();
      aud1.onended = () => {
        isProverkaTrue = true;
      };
    }
  });


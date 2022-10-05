const z = document.querySelector(".z");
const z2 = document.querySelectorAll(".z2");
const el = document.querySelector("#el");

z.ondragover = allowDrop;

function allowDrop(e) {
  e.preventDefault();
}

z2.forEach((i) => {
  this.document.querySelectorAll("img").forEach((i) => {
    i.ondragstart = drag;

    function drag(e) {
      let a = i.id==='eld'||i.id==='el2'
        console.log(a)
      if(a){
        e.dataTransfer.setData("iddsad", e.target.id);
      }else{
        console.log(e.target.id)
      }
      
    }

    z.ondrop = drop;

    function drop(e) {
      e.preventDefault();
      let i = e.dataTransfer.getData("iddsad");

      if (i) {
        e.target.append(document.getElementById(i));
      }
    }
  });
});

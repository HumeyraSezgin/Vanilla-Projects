const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
  let hslColor = "hsl(";
  hslColor += getRandomNumberHue() + ",";
  for(let i = 0; i < 2; i++){
    hslColor += getRandomNumberSL();
    hslColor += "%"
    if(i!=1){
        hslColor += ",";
    }
  }
  hslColor +=")";
  color.textContent = hslColor;
  document.body.style.backgroundColor = hslColor;
  color.style.color = hslColor;
});

function getRandomNumberHue(){
    return Math.floor(Math.random() * 255)
}

function getRandomNumberSL(){
    return Math.floor(Math.random() * 100)
}

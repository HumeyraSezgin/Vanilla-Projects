const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
  let rgbColor = "rgba(";
  for(let i = 0; i < 3; i++){
    rgbColor += getRandomNumber();
    if(i!=2){
        rgbColor += ",";
    }
  }
  rgbColor +=")";
  color.textContent = rgbColor;
  document.body.style.backgroundColor = rgbColor;
  color.style.color = rgbColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * 255)
}

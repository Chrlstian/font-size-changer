
//Global input variable
const fontChange = document.getElementById("fontChanging"); 
let inputCustomFonts = document.querySelector(".inputCustomFonts");

function font1(){
    fontChange.style.fontSize = "10px";
}

function font2(){
    fontChange.style.fontSize = "12px";
}

function font3(){
    fontChange.style.fontSize = "16px";
}

function font4(){
    fontChange.style.fontSize = "20px";
}

function font5(){
    fontChange.style.fontSize = "24px";
}

function font6(){
    fontChange.style.fontSize = "30px";
}

//

function addOne(){
    inputCustomFonts.value++;
}

function minusOne(){
    inputCustomFonts.value--;
}
// variable of "Enter button"
const enterFontButton = document.querySelector(".enterFontSizes");

enterFontButton.addEventListener("click", () =>{
    fontChange.style.fontSize = `${inputCustomFonts.value}px`;
})


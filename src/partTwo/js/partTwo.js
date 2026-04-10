//II parte, refactorizar para hacer toggle, nos basaremos en lo que hicimos en el archivo partOne.js

function changeColor(){
    let colorcito = document.getElementById("background")
    if (colorcito.style.backgroundColor === "darkblue") {
        colorcito.style.backgroundColor = "red"
    } else {
        colorcito.style.backgroundColor = "darkblue"
    }
};

function changeText(){
    let texto = document.getElementById("text")
    if (texto.innerHTML === "darkblue") {
        texto.innerHTML = "red"
    } else {
        texto.innerHTML = "darkblue"
    }
};

function changeStyles(){
    changeColor()
    changeText()
};

export {changeColor, changeText, changeStyles}
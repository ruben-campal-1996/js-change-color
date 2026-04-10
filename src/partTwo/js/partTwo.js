//II parte, refactorizar para hacer toggle, nos basaremos en lo que hicimos en el archivo partOne.js

function changeColor(){
    let colorcito = document.getElementById("container")
    let colorActual = getComputedStyle(colorcito).backgroundColor
    if (colorActual === "rgb(255, 0, 0)") {
        colorcito.style.backgroundColor = "darkblue"
    } else {
        colorcito.style.backgroundColor = "red"
    }
};

function changeText(){
    let texto = document.getElementById("color")
    if (texto.textContent == "red") {
        texto.textContent = "darkblue"
    } else {
        texto.textContent = "red"
    }
};

function changeStyles(){
    changeColor()
    changeText()
};

export {changeColor, changeText, changeStyles}
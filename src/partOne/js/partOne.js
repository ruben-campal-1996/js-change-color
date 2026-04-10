function changeColor(){
    let colorFondo = document.getElementById("background")
    colorFondo.style.backgroundColor= "darkblue"
};

function changeText(){
    let textoColor = document.getElementById("text")
    textoColor.innerHTML="darkblue"
};



function changeStyles(){
    changeColor()
    changeText()
};

export {changeColor, changeText, changeStyles}
//I parte, cambiar color y texto a darkblue
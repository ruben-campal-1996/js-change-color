function changeColor(){
    let colorFondo = document.getElementById("container")
    colorFondo.style.backgroundColor= "darkblue"
};

function changeText(){
    let textoColor = document.getElementById("color")
    textoColor.textContent="darkblue"
};



function changeStyles(){
    changeColor()
    changeText()
};

export {changeColor, changeText, changeStyles}
//I parte, cambiar color y texto a darkblue
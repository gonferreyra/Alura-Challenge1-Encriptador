// Variables
const btnEncript = document.getElementById('encriptar');
const btnUncript = document.getElementById('desencriptar');
const inputTextArea = document.getElementById('input');
const textareaResultado = document.getElementById("input-resultado");
const btnCopy = document.getElementById('btn-copy');

// Css Hidden variables
const resultTextArea = document.querySelector('.resultado');
const divTextHidden = document.querySelector('.result-swap');

cargarEventListeners()

function cargarEventListeners() {
    // funcion encriptar
    btnEncript.addEventListener("click", encriptar);

    // funcion desencriptar
    btnUncript.addEventListener('click', desEncriptar);

    // Add and remove 'hidden' class
    btnEncript.addEventListener("click", hiddenDivs);

    // copy button
    btnCopy.addEventListener('click', copyButton);

    // clear input textarea
    btnEncript.addEventListener('click', clearTextArea);
    btnUncript.addEventListener('click', clearTextArea);

    // clear result textarea
    btnCopy.addEventListener('click', clearTextArea)
}

function hiddenDivs() {
    if (inputTextArea.value != "") {
        resultTextArea.classList.remove('hidden')
        divTextHidden.classList.add('hidden');
    } else {
        alert(`No ha ingresado texto, pruebe nuevamente`);
    }

}

function encriptar() {
    let texto = inputTextArea.value.toLowerCase();
    // console.log(texto)
    let resultado = "";
    if (texto != "") {
        for (let i = 0; i < texto.length; i++) {
            if (texto[i] === "e") {
                resultado = "enter";
            } else if (texto[i] === "i") {
                resultado = resultado + "imes"
            } else if (texto[i] === "a") {
                resultado = resultado + "ai"
            } else if (texto[i] === "o") {
                resultado = resultado + "ober"
            } else if (texto[i] === "u") {
                resultado = resultado + "ufat"
            } else {
                resultado = resultado + texto[i];
            }
        }
    }
    texto.value = "";
    textareaResultado.value = resultado;
    console.log(texto)
}

function desEncriptar() {
    let texto = inputTextArea.value.toLowerCase();
    console.log(texto)
    let resultado = "";
    if (texto != "") {
        resultado = texto.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u')
    }
    textareaResultado.value = resultado;
}

function copyButton() {

}

function clearTextArea() {
    inputTextArea.value = "";
}

// VER FORMA DE HACER FUNCION PARA EL TOOGLE CLASS, Y LLAMARLA EN EL LISTENER. PARA SIMPLIFICAR CODIGO
// gobernzailober

// Variables
const btnEncript = document.getElementById('encriptar');
const btnUncript = document.getElementById('desencriptar');
const inputTextArea = document.getElementById('input');
const textareaResultado = document.getElementById("input-resultado");
const btnCopy = document.getElementById('btn-copy');

// Css Hidden variables
const resultTextArea = document.querySelector('.resultado');
const divTextHidden = document.querySelector('.result-swap');

cargarEventListeners();

function cargarEventListeners() {
    // funcion encriptar
    btnEncript.addEventListener("click", encriptar);

    // funcion desencriptar
    btnUncript.addEventListener('click', desEncriptar);

    // Add and remove 'hidden' class
    btnEncript.addEventListener('click', hiddenDivs);
    btnUncript.addEventListener('click', hiddenDivs);

    // copy button
    btnCopy.addEventListener('click', copyButton);

    // clear input textarea
    btnEncript.addEventListener('click', clearTextArea);
    btnUncript.addEventListener('click', clearTextArea);

    // clear result textarea
    btnCopy.addEventListener('click', clearTextArea);
}

function hiddenDivs() {
    if (inputTextArea.value != "") {
        resultTextArea.classList.remove('hidden')
        divTextHidden.classList.add('hidden');
    } else {
        alert(`No ha ingresado texto, pruebe nuevamente`);
    }

};

function encriptar() {
    let texto = inputTextArea.value;
    let resultado = "";
    let validador = /^[a-z]+$/gm;

    
    if (texto != "") {
        if(texto.match(validador)) {
            for (let i = 0; i < texto.length; i++) {
                if (texto[i] === "e") {
                    resultado = resultado + "enter";
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
        } else{
            alert("Por favor, ingresar solamente letras minusculas. No se aceptan numeros ni caracteres especiales");
        }
    }
    // texto.value = "";
    textareaResultado.value = resultado;
    // console.log(texto)
};

function desEncriptar() {
    let texto = inputTextArea.value;
    console.log(texto)
    let resultado = "";
    let validador = /^[a-z]+$/gm;

    if (texto != "") {
        if(texto.match(validador)) {
            resultado = texto.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u')
        } else {
            alert("Por favor, ingresar solamente letras minusculas. No se aceptan numeros ni caracteres especiales");
        }
    }
    textareaResultado.value = resultado;
    console.log(resultado)
};

function copyButton() {
    let copyButtonText = textareaResultado.value;
    navigator.clipboard.writeText(copyButtonText);
    alert(`Texto copiado al clipboard`);
    resultTextArea.classList.add('hidden')
    divTextHidden.classList.remove('hidden');
};

function clearTextArea() {
    inputTextArea.value = "";
};

// VER FORMA DE HACER FUNCION PARA EL TOOGLE CLASS, Y LLAMARLA EN EL LISTENER. PARA SIMPLIFICAR CODIGO
// AGREGAR CON ANIMACION PARA CUANDO CAMBIA DE DIVS, SE PUEDE HACER CON SL SETtIMEOUT Y CSS, PROBAR


// tabla.addEventListener('dblclick', function (e) {
//     e.target.parentNode.classList.add('fadeOut');
//     setTimeout(function () {
//         e.target.parentNode.remove();
//     }, 500);
// }); // Usamos el parentNode para que NO elimine solo la celda donde hago click, sino la fila completa por eso se va al padre y lo elimina con el remove
// el setTimeout es para que espere antes de ejecutar el conmando de borrar, para que se vea la animacion ya que sino se ejecuta muy rapido

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
    // function encriptar
    btnEncript.addEventListener("click", encriptar);

    // function desencriptar
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
    // let validador = /^[a-z]+\s/gm;
    let validador = /^[^\s]+[a-z ]+$/;
    // ^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$
    // the starting ^ and ending $ denotes the string.
    // considering the first regex I gave, [^\s]+ means at least one not whitespace and \s+ means at least one white space. Note also that parentheses () groups together the second and third fragments and * at the end means zero or more of this group. So, if you take a look, the expression is: begins with at least one non whitespace and ends with any number of groups of at least one whitespace followed by at least one non whitespace.


    if (texto != "") {
        if (texto.match(validador)) {
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
        } else {
            alert("Por favor, ingresar solamente letras minusculas. No se aceptan numeros ni caracteres especiales");
        }
    }
    // texto.value = "";
    textareaResultado.value = resultado;
    // console.log(texto)
};

function desEncriptar() {
    let texto = inputTextArea.value;
    let resultado = "";
    let validador = /^[^\s]+[a-z ]+$/;
    if (texto != "") {
        if (texto.match(validador)) {
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
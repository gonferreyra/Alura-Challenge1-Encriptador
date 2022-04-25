const btnEncript = document.getElementById('encriptar');
const inputTextArea = document.getElementById('input');
const textareaResultado = document.getElementById("input-resultado");

// Css Hidden variables
const resultTextArea = document.querySelector('.resultado');
const divTextHidden = document.querySelector('.result-swap');


btnEncript.addEventListener("click", () => {
    // e.preventDefault();
    encriptar();
    resultTextArea.classList.toggle('hidden')
    divTextHidden.classList.toggle('hidden');
})

function encriptar() {
    let texto = inputTextArea.value.toLowerCase();
    console.log(texto)
    let resultado = "";
    if (texto && texto != "")
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
    textareaResultado.value = resultado;
}
btnEncript.onclick = encriptar;

// Efeito de digitação no título
const titulo = document.getElementById("titulo");
const texto = "Bem-vindo ao meu Portfólio";
let i = 0;

function digitar() {
    if (i < texto.length) {
        titulo.textContent += texto.charAt(i);
        i++;
        setTimeout(digitar, 80); // velocidade da digitação
    }
}

window.onload = digitar;

// Efeito de digitação no subtítulo
const frases = [
    "Coordenador de Execução",
    "Estudante de Engenharia de Software",
    "Entusiasta de Tecnologia"
];

let fraseIndex = 0;
let letraIndex = 0;
const subtitulo = document.createElement('p');
subtitulo.id = "subtitulo";
document.querySelector(".boas-vindas").appendChild(subtitulo);

function digitarFrase() {
    if (letraIndex < frases[fraseIndex].length) {
        subtitulo.textContent += frases[fraseIndex].charAt(letraIndex);
        letraIndex++;
        setTimeout(digitarFrase, 100);
    } else {
        setTimeout(apagarFrase, 2000); // espera 2s antes de apagar
    }
}

function apagarFrase() {
    if (letraIndex > 0) {
        subtitulo.textContent = frases[fraseIndex].substring(0, letraIndex - 1);
        letraIndex--;
        setTimeout(apagarFrase, 50);
    } else {
        fraseIndex = (fraseIndex + 1) % frases.length;
        setTimeout(digitarFrase, 200);
    }
}

window.onload = () => {
    digitarFrase();
};

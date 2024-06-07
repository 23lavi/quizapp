import {trocarTema, verificarTema} from "./helpers/tema-helper.js"

let tema = "claro"

const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")

botaoTema.addEventListener("click", () => {
    trocarTema(tema, body, botaoTema)
})

verificarTema(body, botaoTema)

const botaoAssunto = document.querySelectorAll (".assuntos burron")
botaoAssunto.forEach(botao => {
    botao.addEventListener("click", selecionarAssunto)
})

function selecionarAssunto(evento) {
    const assunto = evento.targer.innerText
    console.log("assunto", assunto)
    window.location.href = "./pages/quiz/quiz.html"
}
function soma(n1, n2) {
    return n1 + n2
}
function multiplicacao(n9, n3) {
    return n9 * n3
}
function subtracao(n5, n4) {
    return n5 - n4
}
function divisao(n6, n7) {
    return n6 / n7
}
function area() {
    let base = prompt("base")
    let altura = prompt("altura")
    let area
    area = base * altura
    alert(area)
}
function areacirculo() {
    let pi = 3.14
    let raio = prompt("Qual é o raio?")
    let area = pi * raio * raio
    alert(area)
}
function dolar() {
    const dol = 4.93
    let real = prompt("Insira o valor em Reais R$")
    alert("O valor em dolar é =" + real * dol)
}
function Hipotenusa() {
    const a = prompt("Valor do CO?")
    const b = prompt("Valor do CA?")
    const h2 = a * a * b * b
    alert(h2)
}
function Temp() {
    const C = prompt("Informe a temperatura em Celsius")
    const F = (C * 1.8) + 32
    alert(F)
}
function Mediarit() {
    const nota1 = prompt("Informe sua primeira nota:")
    const nota2 = prompt("Informe sua segunda nota")
    const nota3 = prompt("Informe sua terceira nota")
    const media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3
    alert(media)
}
function calcularRaizes() {
    const a = parseFloat(prompt("Informe um valor para A"))
    const b = parseFloat(prompt("Informe um valor para B"))
    const c = parseFloat(prompt("Informe um valor para C"))

    const delta = (b * b) - 4 * a * c;

    if (delta < 0) {
        alert("Erro")
    }
    else {
        const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);

        alert(raiz1)
        alert(raiz2);
    }
}
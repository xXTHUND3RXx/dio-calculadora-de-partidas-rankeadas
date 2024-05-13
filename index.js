let vitorias = 100
let derrotas = 9

function saldoVitorias(vitorias, derrotas) {
    return vitorias - derrotas
}

let resultado = saldoVitorias(vitorias, derrotas)

if (resultado < 10) {
    console.log("O Herói tem de saldo de " + resultado + " está no nivel de Ferro")
} else if (resultado >= 11 && resultado <= 20) {
    console.log("O Herói tem de saldo de " + resultado + " está no nivel de Bronze")
} else if (resultado >= 21 && resultado <= 50) {
    console.log("O Herói tem de saldo de " + resultado + " está no nivel de Prata")
} else if (resultado >= 51 && resultado <= 80) {
    console.log("O Herói tem de saldo de " + resultado + " está no nivel de Ouro")
} else if (resultado >= 81 && resultado <= 90) {
    console.log("O Herói tem de saldo de " + resultado + " está no nivel de Diamante")
} else if (resultado >= 91 && resultado <= 100) {
    console.log("O Herói tem de saldo de " + resultado + " está no nivel de Lendário")
} else if (resultado >= 101) {
    console.log("O Herói tem de saldo de " + resultado + " está no nivel de Imortal")
}

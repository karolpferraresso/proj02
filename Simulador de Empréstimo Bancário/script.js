let salario = Number(prompt("Digite seu salário:"));
let parcela = Number(prompt("Digite o valor da parcela:"));

let limite = salario * 0.30;

if (parcela > limite) {
    alert("Empréstimo Negado: Parcela muito alta.");
} else {
    alert("Empréstimo Pré-aprovado.");
}
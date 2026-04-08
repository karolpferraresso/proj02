let valorCarro = Number(prompt("Digite o valor do carro:"));
let opcao = prompt("Forma de pagamento:\n1 - PIX\n2 - Cartão (24x)\n3 - Financiamento (48x)");

let total, parcelas, valorParcela;

if (opcao == "1") {
    total = valorCarro * 0.85;
    alert("Pagamento à vista no PIX.");
    alert("Total: R$ " + total.toFixed(2));
} else if (opcao == "2") {
    total = valorCarro * 1.05;
    parcelas = 24;
    valorParcela = total / parcelas;
    alert("Cartão de crédito.");
    alert("Total: R$ " + total.toFixed(2));
    alert("Parcelas: 24x de R$ " + valorParcela.toFixed(2));
} else if (opcao == "3") {
    total = valorCarro * 1.20;
    parcelas = 48;
    valorParcela = total / parcelas;
    alert("Financiamento.");
    alert("Total: R$ " + total.toFixed(2));
    alert("Parcelas: 48x de R$ " + valorParcela.toFixed(2));
} else {
    alert("Opção inválida.");
}
let valorPedido = Number(prompt("Digite o valor do pedido:"));
let total = valorPedido;

if (valorPedido > 50) {
    let fidelidade = prompt("Possui cartão fidelidade? (sim/não)");

    if (fidelidade == "sim" || fidelidade == "SIM" || fidelidade == "Sim") {
        total = valorPedido * 0.90;
        alert("Desconto aplicado!");
    } else {
        alert("Você ganhou um cookie de brinde 🍪");
    }
}

alert("Total a pagar: R$ " + total.toFixed(2));
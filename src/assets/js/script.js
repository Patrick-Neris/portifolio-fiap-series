document.querySelector("#qtde").addEventListener("change", calculateCost)
document.querySelector("#js").addEventListener("change", calculateCost)
document.querySelector("#layout_sim").addEventListener("change", calculateCost)
document.querySelector("#layout_nao").addEventListener("change", calculateCost)
document.querySelector("#prazo").addEventListener("change", calculateCost)

function calculateCost() {
    let custo = qtde.value * 100;
    js.checked ? custo *= 1.1 : undefined;
    layout_sim.checked ? custo += 500 : null;
    custo *= 2.1 - (prazo.value * 0.1);

    label_prazo.innerHTML = `Prazo: ${prazo.value} semanas.`;

    cost.innerHTML = `R$ ${custo.toFixed(2)}`;
}

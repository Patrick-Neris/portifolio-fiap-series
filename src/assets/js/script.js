document.querySelector("#qtde").addEventListener("change", calculateCost)
document.querySelector("#js").addEventListener("change", calculateCost)
document.querySelector("#layout_sim").addEventListener("change", calculateCost)
document.querySelector("#layout_nao").addEventListener("change", calculateCost)
document.querySelector("#prazo").addEventListener("change", calculateCost)

function calculateCost() {
    let cost = qtde.value * 100;
    console.log("pós value, cost: ", cost);
    !!js.value ? cost *= 1.1 : undefined;
    console.log("pós js, cost: ", cost);
    !!layout_sim.value ? cost += 500 : cost = cost;
    console.log("pós layout_sim, cost: ", cost); // Arrumar o preço com esse layout
    cost *= 2.1 - (prazo.value * 0.1);
    console.log("pós prazo, cost: ", cost);

    document.querySelector("#label_prazo").innerHTML = `Prazo: ${prazo.value} semanas.`;

    document.querySelector("#cost").innerHTML = `R$ ${cost.toFixed(2)}`;
}

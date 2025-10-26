const simBtn = document.getElementById("simBtn");
const naoBtn = document.getElementById("naoBtn");
const resultado = document.getElementById("resultado");

function mostrarResultado() {
  resultado.classList.remove("hidden");
}

naoBtn.addEventListener("click", () => {
  alert("Resposta errada , tente de novo!");
});

simBtn.addEventListener("click", mostrarResultado);


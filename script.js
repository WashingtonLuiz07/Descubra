const simBtn = document.getElementById("simBtn");
const naoBtn = document.getElementById("naoBtn");
const resultado = document.getElementById("resultado");

simBtn.addEventListener("click", () => {
  resultado.classList.remove("hidden");
});

naoBtn.addEventListener("mouseenter", () => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const btnWidth = naoBtn.offsetWidth;
  const btnHeight = naoBtn.offsetHeight;

  // Posição atual
  const rect = naoBtn.getBoundingClientRect();
  let currentX = rect.left;
  let currentY = rect.top;

  // Gerar deslocamento limitado (20 a 100px)
  const deltaX = (Math.random() * 80 + 20) * (Math.random() < 0.5 ? -1 : 1);
  const deltaY = (Math.random() * 80 + 20) * (Math.random() < 0.5 ? -1 : 1);

  // Nova posição limitada à tela
  let newX = Math.min(Math.max(currentX + deltaX, 10), vw - btnWidth - 10);
  let newY = Math.min(Math.max(currentY + deltaY, 10), vh - btnHeight - 10);

  naoBtn.style.transition = "all 0.5s ease";
  naoBtn.style.position = "absolute";
  naoBtn.style.left = `${newX}px`;
  naoBtn.style.top = `${newY}px`;

  // Criar rastro geométrico
  const rastro = document.createElement("div");
  rastro.classList.add("rastro");
  rastro.style.left = `${newX + btnWidth / 2}px`;
  rastro.style.top = `${newY + btnHeight / 2}px`;
  document.body.appendChild(rastro);

  setTimeout(() => {
    rastro.remove();
  }, 1000);
});

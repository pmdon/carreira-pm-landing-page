let visitas = 0;
function atualizarContador() {
  visitas += 1;
  document.getElementById("numero-visitas").textContent = visitas;
}
atualizarContador();

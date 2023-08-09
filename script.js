const violinoButton = document.getElementById('violinoButton');
const contrabaixoButton = document.getElementById('contrabaixoButton');
const bateriaButton = document.getElementById('bateriaButton');
const guitarraButton = document.getElementById('guitarraButton');
// Referencie outros botões/link aqui

violinoButton.addEventListener('click', () => {
  window.location.href = 'violino.html'; // Redireciona para a página do Violino
});

contrabaixoButton.addEventListener('click', () => {
  window.location.href = 'contrabaixo.html'; // Redireciona para a página do Contrabaixo
});
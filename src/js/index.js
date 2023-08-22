const characters = document.querySelectorAll(".personagem");
const player1Image = document.getElementById('personagem-jogador-1');
const player1Name = document.getElementById('nome-jogador-1');

characters.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    const selectedId = character.attributes.id.value;

    if (selectedId !== 'ultron') {
      const selectedCharacter = document.querySelector(".selecionado");
      selectedCharacter.classList.remove("selecionado");
  
      character.classList.add("selecionado");
  
      player1Image.src = `./src/imagens/${selectedId}.png`;
  
      const selectedName = character.getAttribute('data-name');
      player1Name.innerHTML = selectedName;
    }
  });
});

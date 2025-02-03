// Função para adicionar interatividade ao botão
document.getElementById('botaoInterativo').addEventListener('click', function () {
    alert('Me contrata! 🎉');
});




//Configurando a lista de animes

const animeInput = document.getElementById('anime-input');
const addBtn = document.getElementById('add-btn');
const animeList = document.getElementById('anime-list');


//Função para adicionar anime
function adicionaAnime() {
    const nomeAnime = animeInput.value.trim();//remove qualuqer espaço em branco no final a string
  
    if (nomeAnime === '') {
      alert('Por favor, digite o nome de um anime.');
      return;
    }
  
    // Cria um novo item de lista
    const li = document.createElement('li');//cria uma li
    li.textContent = nomeAnime ;//Está atribuindo o conteudo ao elemento Li
  
    // Cria um botão para remover o anime
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    removeBtn.onclick = function () {
      animeList.removeChild(li);
    };
  
    // Adiciona o botão ao item da lista
   
    li.appendChild(removeBtn);
    li.appendChild(removeBtn);
  
    // Adiciona o item à lista
    animeList.appendChild(li);
  
    // Limpa o campo de entrada
    animeInput.value = '';
  }
  
  // Adiciona o evento de clique ao botão "Adicionar Anime"
  addBtn.addEventListener('click',adicionaAnime);
  
  // Permite adicionar um anime pressionando Enter
  animeInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        adicionaAnime();
    }
  });
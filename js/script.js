// Função para adicionar interatividade ao botão
document.getElementById('botaoInterativo').addEventListener('click', function () {
    alert('Me contrata! 🎉 Email: 26rodrigocurso@gmail.com');
});

// Seleciona os elementos do DOM
const animeInput = document.getElementById('anime-input');
const addBtn = document.getElementById('add-btn');
const animeList = document.getElementById('anime-list');

// Função para carregar a lista do LocalStorage
function loadAnimeList() {
  const savedAnimes = localStorage.getItem('animeList'); // Obtém a lista salva
  if (savedAnimes) {
    const animes = JSON.parse(savedAnimes); // Converte de string para array
    animes.forEach((animeName) => {
      addAnimeToList(animeName); // Adiciona cada anime à lista
    });
  }
}

// Função para salvar a lista no LocalStorage
function saveAnimeList() {
  const animeItems = Array.from(animeList.children).map((li) => li.firstChild.textContent);
  localStorage.setItem('animeList', JSON.stringify(animeItems)); // Salva como string
}

// Função para adicionar um anime à lista
function addAnimeToList(animeName) {
  const li = document.createElement('li');

  // Cria um span para o nome do anime
  const animeSpan = document.createElement('span');
  animeSpan.textContent = animeName;

  // Cria um botão para remover o anime
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remover';
  removeBtn.onclick = function () {
    animeList.removeChild(li); // Remove o anime da lista
    saveAnimeList(); // Atualiza o LocalStorage após remover
  };

  // Adiciona o span e o botão ao item da lista
  li.appendChild(animeSpan);
  li.appendChild(removeBtn);

  // Adiciona o item à lista
  animeList.appendChild(li);
}

// Função para adicionar um novo anime
function addAnime() {
  const animeName = animeInput.value.trim();

  if (animeName === '') {
    alert('Por favor, digite o nome de um anime.');
    return;
  }

  addAnimeToList(animeName); // Adiciona o anime à lista
  saveAnimeList(); // Salva a lista no LocalStorage
  animeInput.value = ''; // Limpa o campo de entrada
}

// Carrega a lista salva ao iniciar a página
loadAnimeList();

// Adiciona o evento de clique ao botão "Adicionar Anime"
addBtn.addEventListener('click', addAnime);

// Permite adicionar um anime pressionando Enter
animeInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addAnime();
  }
});
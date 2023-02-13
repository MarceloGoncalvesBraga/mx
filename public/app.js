const url = 'postagens/api';

const CompoDePostagens = document.querySelector('.postagens-center');

const fetchpostagens = async () => {
  CompoDePostagens.innerHTML = '<div class="loading"></div>';
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    CompoDePostagens.innerHTML = '<p class="error">Ouve um erro</p>';
  }
};

const displayPostagens = (list) => {
  const postagemList = list.map((postagem) => {
    const { id } = postagem;
    const { title: title, autor: autor, texto: texto } = postagem;
    // id,title,autor,texto
    return `
            <div class="single-postagem">
              <a href="postagem.html?id=${id}">
              <h3 class="name">${title}</h3>
              <span class="autor h3">${autor}</span>
              <span class="autor h3">${texto}</span>
              </a>
            </div>
          `;
  })
    .join('');
  CompoDePostagens.innerHTML = ` <div class="postagens-container">
         ${postagemList}
          
        </div>`;
};

const start = async () => {
  const data = await fetchpostagens();
  displayPostagens(data);
};

start();

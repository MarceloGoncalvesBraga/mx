const CompoDePosts = document.querySelector('.postagem');
const CompoDeComentarios = document.querySelector('.comentario');
const url = 'postagens/select';
const url_c = 'postagens/coments';
const fetchpostagem = async () => {
  try {
    CompoDePosts.innerHTML = '<h4 class="postagem-loading">Loading... </h4>';
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    CompoDePosts.innerHTML =
      '<p class="error">Ouve um problema ao carregar a postagem</p>';
  }
};
const fetchcomentarios = async () => {
  try {
    CompoDeComentarios.innerHTML = '<h4 class="postagem-loading">Loading... </h4>';
    // console.log(window.location.search);
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const response = await fetch(`${url_c}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    CompoDeComentarios.innerHTML =
      '<p class="error">Ouve um problema</p>';
  }
};
const displaypostagem = (list) => {
  const postagemList = list.map((postagem) => {
      const { id } = postagem;
      const { title: title, autor:autor, texto:texto } = postagem;
      // id,title,autor,texto
      return `
            <footer>
              <h5 class="name">${title}</h5>
              <span class="autor">${autor}</span>
              <span class="autor">${texto}</span>
            </footer>
          `;
    })
    .join('');
    CompoDePosts.innerHTML = ` <div class="postagens-container">
         ${postagemList}
          
        </div>`;
};
const displaycomentario = (list) => {
  const comantarioList = list.map((comentario) => {
      const {id:id,nome: nome, email:email, mensagem:mensagem } = comentario;
      // id,nome,email,mensagem
      return `
            <footer>
              <h5 class="name">${nome}</h5>
              <span class="autor">${email}</span>
              <span class="autor">${mensagem}</span>
            </footer>
          `;
    })
    .join('');
    CompoDeComentarios.innerHTML = ` <div class="postagens-container">
         ${comantarioList}
        </div>
        `;
};
const start = async () => {
  const data = await fetchpostagem();
  const dados = await fetchcomentarios();
  displaypostagem(data);
  displaycomentario(dados);
};

start();

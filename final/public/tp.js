async function cadastrarPersonagem() {
    const nome = document.getElementById('nome').value.trim();
    const descricao = document.getElementById('descricao').value.trim();
    const imagem = document.getElementById('imagem').value.trim();
    const mensagem = document.getElementById('mensagem');
    const lista = document.getElementById('lista-personagens');
  
    if (!nome || !descricao || !imagem) {
      mensagem.style.color = 'red';
      mensagem.innerText = 'Erro 400: Preencha todos os campos!';
      return;
    }
  
    try {
      const res = await fetch("http://localhost:3000/api/personagens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ nome, descricao, imagem })
      });
  
      if (res.ok) {
        mensagem.style.color = 'green';
        mensagem.innerText = 'Personagem cadastrado com sucesso!';
  
        // Adiciona o personagem na lista (sem recarregar)
        const personagem = document.createElement('div');
        personagem.className = 'personagem';
  
        personagem.innerHTML = `
          <img src="${imagem}" alt="${nome}">
          <div class="info">
            <h3>${nome}</h3>
            <p>${descricao}</p>
          </div>
        `;
  
        lista.appendChild(personagem);
  
        // Limpa os campos
        document.getElementById('nome').value = '';
        document.getElementById('descricao').value = '';
        document.getElementById('imagem').value = '';
      } else {
        const data = await res.json();
        mensagem.style.color = 'red';
        mensagem.innerText = data.message || "Erro ao cadastrar personagem.";
      }
    } catch (error) {
      mensagem.style.color = 'red';
      mensagem.innerText = "Erro na requisição: " + error.message;
    }
  }
  
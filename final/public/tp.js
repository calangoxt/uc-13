
let idEmEdicao = null;
function prepararAtualizacao(id, nome, descricao, imagem) {
document.getElementById('nome').value = nome;
document.getElementById('descricao').value = descricao;
document.getElementById('imagem').value = imagem;
idEmEdicao = id;

const botao = document.querySelector('.btn');
botao.innerText = 'Salvar Alterações';
}

async function carregarPersonagens() {
  const lista = document.getElementById('lista-personagens');
  lista.innerHTML = ''; // limpa a lista

  try {
    const res = await fetch("http://localhost:3000/api/personagens");
    if (res.ok) {
      const personagens = await res.json();

      personagens.forEach(p => {
        const div = document.createElement('div');
        div.className = 'personagem';
        div.innerHTML = `
<img src="${p.imgUrl}" alt="${p.nome}">
<div class="info">
<h3>${p.nome}</h3>
<p>${p.descricao}</p>
<button class="excluir-btn" onclick="excluirPersonagem('${p.id}', this)">Excluir</button>
<button class="atualizar-btn" onclick="prepararAtualizacao('${p.id}', '${p.nome}', '${p.descricao}', '${p.imgUrl}')">Atualizar</button>
</div>
`;

        lista.appendChild(div);
      });
    } else {
      document.getElementById('mensagem').innerText = 'Erro ao carregar personagens.';
    }
  } catch (error) {
    document.getElementById('mensagem').innerText = 'Erro na API: ' + error.message;
  }
}

// Carregar assim que a página for aberta
document.addEventListener('DOMContentLoaded', carregarPersonagens);
async function excluirPersonagem(id, botao) {
if (!confirm('Tem certeza que deseja excluir este personagem?')) return;

try {
const res = await fetch(`http://localhost:3000/api/personagens/${id}`, {
  method: 'DELETE'
});

if (res.ok) {
  // Remove o card da tela
  const card = botao.closest('.personagem');
  card.remove();
} else {
  alert('Erro ao excluir personagem');
}
} catch (error) {
alert('Erro na requisição: ' + error.message);
}
}async function cadastrarPersonagem() {
const nome = document.getElementById('nome').value.trim();
const descricao = document.getElementById('descricao').value.trim();
const imgUrl = document.getElementById('imagem').value.trim();
const mensagem = document.getElementById('mensagem');

if (!nome || !descricao || !imgUrl) {
mensagem.style.color = 'red';
mensagem.innerText = 'Erro 400: Preencha todos os campos!';
return;
}

try {
let res;
if (idEmEdicao) {
  // Atualizar personagem existente
  res = await fetch(`http://localhost:3000/api/personagens/${idEmEdicao}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, descricao, imgUrl })
  });
} else {
  // Cadastrar novo personagem
  res = await fetch("http://localhost:3000/api/personagens", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, descricao, imgUrl })
  });
}

if (res.ok) {
  mensagem.style.color = 'green';
  mensagem.innerText = idEmEdicao
    ? 'Personagem atualizado com sucesso!'
    : 'Personagem cadastrado com sucesso!';

  // Limpar campos
  document.getElementById('nome').value = '';
  document.getElementById('descricao').value = '';
  document.getElementById('imagem').value = '';
  document.querySelector('.btn').innerText = 'Cadastrar Personagem';
  idEmEdicao = null;

  carregarPersonagens(); // atualiza a lista
} else {
  const data = await res.json();
  mensagem.style.color = 'red';
  mensagem.innerText = data.message || "Erro ao salvar.";
}
} catch (error) {
mensagem.style.color = 'red';
mensagem.innerText = "Erro na requisição: " + error.message;
}
}



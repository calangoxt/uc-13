document.addEventListener('DOMContentLoaded', () => {
    const loginBox = document.getElementById('login-box');
    const cadastroBox = document.getElementById('cadastro-box');
    const loginMsg = document.getElementById('login-msg');
    const cadastroMsg = document.getElementById('cadastro-msg');
  
    const loginForm = document.getElementById("login-form");
    const cadastroForm = document.getElementById("cadastro-form");
  
    function mostrarCadastro() {
      loginBox.classList.add('hidden');
      cadastroBox.classList.remove('hidden');
      limparMensagens();
    }
  
    function mostrarLogin() {
      cadastroBox.classList.add('hidden');
      loginBox.classList.remove('hidden');
      limparMensagens();
    }
  
    function limparMensagens() {
      loginMsg.innerText = '';
      cadastroMsg.innerText = '';
    }
  
    async function realizarLogin(e) {
      e.preventDefault();
  
      const name = document.getElementById("login-user").value;
      const password = document.getElementById("login-pass").value;
  
      try {
        const res = await fetch("http://localhost:3000/api/usersLogin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, password })
        });
  
        if (res.ok) {
          loginMsg.style.color = 'green';
          loginMsg.innerText = 'Login realizado! Redirecionando...';
          setTimeout(() => {
            window.location.href = "telaPrincipal.html";
          }, 1500);
        } else {
          const data = await res.json();
          loginMsg.style.color = 'red';
          loginMsg.innerText = data.message || "Erro ao fazer login.";
        }
      } catch (error) {
        loginMsg.style.color = 'red';
        loginMsg.innerText = "Erro na requisição: " + error.message;
      }
    }
  
    async function realizarCadastro(e) {
      e.preventDefault();
  
      const name = document.getElementById("cad-nome").value;
      const email = document.getElementById("cad-email").value;
      const password = document.getElementById("cad-senha").value;
  
      try {
        const res = await fetch("http://localhost:3000/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password })
        });
  
        if (res.ok) {
          cadastroMsg.style.color = 'green';
          cadastroMsg.innerText = 'Cadastro realizado! Redirecionando...';
          setTimeout(() => {
            window.location.href = "telaPrincipal.html";
          }, 1500);
        } else {
          const data = await res.json();
          cadastroMsg.style.color = 'red';
          cadastroMsg.innerText = data.message || "Erro ao cadastrar.";
        }
      } catch (error) {
        cadastroMsg.style.color = 'red';
        cadastroMsg.innerText = "Erro na requisição: " + error.message;
      }
    }
  
    loginForm.addEventListener("submit", realizarLogin);
    cadastroForm.addEventListener("submit", realizarCadastro);
  
    // Expor as funções no escopo global para uso no HTML
    window.mostrarCadastro = mostrarCadastro;
    window.mostrarLogin = mostrarLogin;
  });
  
function CallsMap() {
  const calls = document.querySelector(".container-ligacoes");

  for (let i = 0; i < 4; i++) {
    calls.innerHTML += `
  <div class="call">
    <ion-icon class="perfil-icon" name="person"></ion-icon>
    <div class="descricao-ligacao">
      <div><ion-icon class="little-icon" name="phone-portrait"></ion-icon><span>Celular: <strong>+18 99625 7029</strong></span></div>
      <div><ion-icon class="little-icon" name="finger-print"></ion-icon><span>Nome do Contato: <strong>Pedro Lindo</span></strong></div>
      <div><ion-icon class="little-icon" name="calendar"></ion-icon><span>Data da Ligação: <strong>18/06/2022</span></strong></div>
      <div><ion-icon class="little-icon" name="alarm"></ion-icon><span>Duração da Chamada: <strong>3 Minutos</strong></span></div>
    </div>
  </div>
  <div class="call">
  <ion-icon class="perfil-icon" name="person-add"></ion-icon>
  <div class="descricao-ligacao">
    <div><ion-icon class="little-icon" name="phone-portrait"></ion-icon><span>Celular: <strong>+18 998812-3812</strong></span></div>
    <div><ion-icon class="little-icon" name="finger-print"></ion-icon><span>Nome do Contato: <strong>Não cadastrado</span></strong></div>
    <div><ion-icon class="little-icon" name="calendar"></ion-icon><span>Data da Ligação: <strong>18/06/2022</span></strong></div>
    <div><ion-icon class="little-icon" name="alarm"></ion-icon><span>Duração da Chamada: <strong>3 Minutos</strong></span></div>
  </div>
  <div class="info"><h6>CONTATO NÃO CADASTRADO.</h6></div>
</div>
   `;
  }
}

// +-------------------------------+
// |  FUNCOES PARA TROCAR DE TELA  |
// +-------------------------------+

function showLigacoes() {
  const content = document.querySelector(".content");

  content.innerHTML = `<iframe class="sidebar-right name="test" src="./Pages/Ligacoes.html"> </iframe>`;
}

function showHome() {
  const content = document.querySelector(".content");

  content.innerHTML = ` <iframe class="sidebar-right name="content" src="./Pages/Home.html"> </iframe>`;
}

function showWhatsapp() {
  const content = document.querySelector(".content");

  content.innerHTML = `<iframe class="sidebar-right name="content" src="./Pages/Whatsapp.html"> </iframe>`;
}

function showAgendaWhatsapp() {
  const content = document.querySelector(".content");

  content.innerHTML = `<iframe class="sidebar-right name="content" src="./Pages/AgendaWhatsapp.html"> </iframe>`;
}

function showSMS() {
  const content = document.querySelector(".content");

  content.innerHTML = `<iframe class="sidebar-right name="content" src="./Pages/SMS.html"> </iframe>`;
}

function showExtras() {
  const content = document.querySelector(".content");

  content.innerHTML = `<iframe class="sidebar-right name="content" src="./Pages/Extras.html"> </iframe>`;
}

function showAgendaTelefonica() {
  const content = document.querySelector(".content");

  content.innerHTML = `<iframe class="sidebar-right name="content" src="./Pages/AgendaTelefonica.html"> </iframe>`;
}

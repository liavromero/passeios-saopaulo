const calendar = document.getElementById("calendar");
const lista = document.getElementById("lista-passeios");

const start = 12;
const end = 27;
let passeios = {};

// Função para criar calendário
for (let dia = 1; dia <= 31; dia++) {
    let div = document.createElement("div");
    div.classList.add("dia");
    div.textContent = dia;

    if (dia >= start && dia <= end) {
        div.classList.add("ativo");
        div.addEventListener("click", (event) => abrirDia(dia, event));
    } else {
        div.style.opacity = 0.4;
    }

    calendar.appendChild(div);
}

// Função para abrir dia selecionado
function abrirDia(dia, event) {
    document.querySelectorAll('.dia').forEach(d => d.classList.remove('selecionado'));
    event.currentTarget.classList.add('selecionado');

    // Mostra passeios
    lista.innerHTML = "";
    if (!passeios[dia] || passeios[dia].length === 0) {
        lista.innerHTML = "<p>Nenhum passeio adicionado.</p>";
    } else {
        passeios[dia].forEach(p => {
          const card = document.createElement("div");
card.classList.add("passeio-card");
card.innerHTML = `
    <img src="${p.foto}" />
    <div class="conteudo">
        <h3>${p.nome}</h3>
        <p>${p.descricao || ""}</p>
    </div>
`;
            card.onclick = () => window.location.href = p.link;
            lista.appendChild(card);
        });
    }

}

// Função para adicionar passeio
function addPasseio(dia, nome, foto, link, descricao) {
    if (!passeios[dia]) passeios[dia] = [];
    passeios[dia].push({ nome, foto, link, descricao });
}



// Roteiro SP Jan 2026

// 16/01/2026 — MASP (noite)
addPasseio(16, "MASP", 
    "imgs/maspcapa.jpg", 
    "masp.html", 
    "Museu de Arte de São Paulo — arquitetura icônica na Avenida Paulista; exposições de arte moderna e contemporânea. Visita no horário de 18h–21h, gratuita.");


// 17/01/2026 — Pinacoteca + Estação da Luz / Jardim da Luz
addPasseio(17, "Pinacoteca do Estado de São Paulo", 
    "imgs/pinacotecacapa.png", 
    "pinacoteca.html", 
    "Visita à Pinacoteca — ótimo acervo de arte brasileira. Entrada gratuita.");

addPasseio(17, "Estação da Luz + Jardim da Luz", 
    "imgs/luzcapa.jpg", 
    "luz.html", 
    "Passeio pela histórica Estação da Luz e área do Jardim da Luz próxima à Pinacoteca — bom para fotos e atmosfera do centro.");

// 19/01/2026 — Parque Ibirapuera + MAM/ Museu Afro Brasil (opcional)
addPasseio(19, "Parque Ibirapuera", 
    "https://upload.wikimedia.org/wikipedia/commons/1/14/Parque_Ibirapuera_SP_lago.jpg", 
    "https://pt.wikipedia.org/wiki/Parque_Ibirapuera", 
    "Caminhada e relax no Parque Ibirapuera — natureza, pavilhões e áreas livres para descanso.");

addPasseio(19, "MAM / Museu Afro Brasil (Ibirapuera)", 
    "https://upload.wikimedia.org/wikipedia/commons/2/2d/MAM_São_Paulo_Prédio.jpg", 
    "https://pt.wikipedia.org/wiki/MAM_(São_Paulo)", 
    "Visita a museu de arte moderna ou ao Museu Afro Brasil dentro do complexo do Ibirapuera — para quem quiser parte cultural + paisagem do parque.");

// 21/01/2026 — Beco do Batman / Vila Madalena
addPasseio(21, "Beco do Batman", 
    "https://upload.wikimedia.org/wikipedia/commons/7/7f/Beco_do_Batman_2017.jpg", 
    "https://pt.wikipedia.org/wiki/Beco_do_Batman", 
    "Arte de rua e grafites na Vila Madalena — rua de arte urbana a céu aberto, passeio livre e colorido.");

addPasseio(21, "Vila Madalena (bairro)", 
    "https://upload.wikimedia.org/wikipedia/commons/3/30/Vila_Madalena_SP_passagem.jpg", 
    "https://pt.wikipedia.org/wiki/Vila_Madalena", 
    "Explorar o bairro Vila Madalena — cafés, lojinhas, atmosfera boêmia e descolada.");

// 23/01/2026 — Mercado Municipal + Centro Histórico (Sé / Pátio do Colégio)
addPasseio(23, "Mercado Municipal de São Paulo (Mercadão)", 
    "https://upload.wikimedia.org/wikipedia/commons/5/55/Mercado_Municipal_de_São_Paulo_entrada.jpg", 
    "https://pt.wikipedia.org/wiki/Mercado_Municipal_de_São_Paulo", 
    "Visita ao Mercado Municipal — lanches típicos, bancas de frutas/temperos, arquitetura histórica.");

addPasseio(23, "Centro Histórico de São Paulo (Sé, Pátio do Colégio)", 
    "https://upload.wikimedia.org/wikipedia/commons/2/2c/Catedral_da_Sé_SP_fachada.jpg", 
    "https://pt.wikipedia.org/wiki/Catedral_da_Sé_de_São_Paulo", 
    "Caminhada pela região histórica — Praça da Sé, prédios e monumentos antigos, atmosfera urbana tradicional de SP.");

// 25/01/2026 — Centro Cultural SP (CCSP) + opção cultural (SESC/Itaú Cultural)
addPasseio(25, "Centro Cultural São Paulo (CCSP)", 
    "https://upload.wikimedia.org/wikipedia/commons/9/94/CCSP_São_Paulo_prédio.jpg", 
    "https://pt.wikipedia.org/wiki/Centro_Cultural_São_Paulo", 
    "Visitar CCSP — espaço cultural com teatro, cinema, exposições; muitas atividades gratuitas ou de baixo custo.");

addPasseio(25, "SESC / Espaço cultural alternativo", 
    "https://upload.wikimedia.org/wikipedia/commons/0/09/SESC_São_Paulo_unidade.jpg", 
    "https://www.sescsp.org.br/", 
    "Verificar programação de exposições e shows — opção cultural extra para variar o dia.");

// 27/01/2026 (manhã) — Museu do Futebol + passeio livre/arrumar malas
addPasseio(27, "Museu do Futebol (Pacaembu)", 
    "https://upload.wikimedia.org/wikipedia/commons/5/53/Estádio_do_Pacaembu_fachada.jpg", 
    "https://pt.wikipedia.org/wiki/Museu_do_Futebol", 
    "Visita ao Museu do Futebol no Pacaembu — história do futebol brasileiro, interativo e legal pra quem curte esporte e cultura.");



  const nav = document.querySelector("#menu");
  const menuBtn = document.querySelector(".menu-btn");

  // abre e fecha menu
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("open");
  });

  // fecha ao clicar fora
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
      nav.classList.remove("open");
    }
  });

  // fecha ao clicar em link
  document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
  
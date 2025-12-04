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
            card.classList.add("card");
            card.innerHTML = `
                <img src="${p.foto}" />
                <div>
                    <h3>${p.nome}</h3>
                    <p class="descricao">${p.descricao || ""}</p>
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



// Exemplo de passeios
addPasseio(14, "MASP", "imgs/maspcapa.jpg", "masp.html", "Museu de Arte de São Paulo, com exposições incríveis de arte moderna e contemporânea.");
addPasseio(15, "Parque Ibirapuera", "imgs/ibirapuera.jpg", "ibirapuera.html", "Ótimo lugar para caminhadas e relaxar ao ar livre.");
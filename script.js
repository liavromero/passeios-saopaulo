
const calendar = document.getElementById("calendar");
const lista = document.getElementById("lista-passeios");

const start = 14;
const end = 31;
let passeios = {};

// ==== Calendar configuration ====
const year = 2026;
const month = 0; // January = 0

// First weekday of the month (0 = Sunday)
const firstWeekday = new Date(year, month, 1).getDay();

// Total days in the month
const totalDays = new Date(year, month + 1, 0).getDate();

// Insert blank divs before day 1 for correct alignment
for (let i = 0; i < firstWeekday; i++) {
    const blank = document.createElement("div");
    blank.classList.add("dia");
    blank.style.visibility = "hidden"; // invisible placeholder
    calendar.appendChild(blank);
}

// Create day divs
for (let day = 1; day <= totalDays; day++) {
    const div = document.createElement("div");
    div.classList.add("dia");
    div.textContent = day;

    // Optional: highlight today
    const today = new Date();
    if (
        day === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
    ) {
        div.classList.add("hoje");
    }

    // Active days logic
    if (day >= start && day <= end) {
        div.classList.add("ativo");
        div.addEventListener("click", (event) => abrirDia(day, event));
    } else {
        div.style.opacity = 0.4;
    }

    calendar.appendChild(div);
}

// ==== Function to open selected day ====
function abrirDia(dia, event) {
    document.querySelectorAll(".dia").forEach((d) =>
        d.classList.remove("selecionado")
    );
    event.currentTarget.classList.add("selecionado");

    // Show passeios
    lista.innerHTML = "";
    if (!passeios[dia] || passeios[dia].length === 0) {
        lista.innerHTML = "<p>Nenhum passeio adicionado.</p>";
    } else {
        passeios[dia].forEach((p) => {
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

// ==== Function to add passeios ====
function addPasseio(dia, nome, foto, link, descricao) {
    if (!passeios[dia]) passeios[dia] = [];
    passeios[dia].push({ nome, foto, link, descricao });
}

// ==== Example passeios (keep all her existing entries) ====
// 16/01/2026 — MASP
addPasseio(16, "MASP", "imgs/maspcapa.jpg", "masp.html", "Museu de Arte de São Paulo — arquitetura icônica na Avenida Paulista; exposições de arte moderna e contemporânea. Visita no horário de 18h–21h, gratuita.");

// 17/01/2026 — Pinacoteca + Estação da Luz / Jardim da Luz
addPasseio(17, "Pinacoteca do Estado de São Paulo", "imgs/pinacotecacapa.png", "pinacoteca.html", "Visita à Pinacoteca — ótimo acervo de arte brasileira. Entrada gratuita.");
addPasseio(17, "Estação da Luz + Jardim da Luz", "imgs/luzcapa.jpg", "luz.html", "Passeio pela histórica Estação da Luz e área do Jardim da Luz próxima à Pinacoteca — bom para fotos e atmosfera do centro.");

// 19/01/2026 — Parque Ibirapuera + MAM/ Museu Afro Brasil
addPasseio(19, "Parque Ibirapuera", "https://upload.wikimedia.org/wikipedia/commons/1/14/Parque_Ibirapuera_SP_lago.jpg", "https://pt.wikipedia.org/wiki/Parque_Ibirapuera", "Caminhada e relax no Parque Ibirapuera — natureza, pavilhões e áreas livres para descanso.");
addPasseio(19, "MAM / Museu Afro Brasil (Ibirapuera)", "https://upload.wikimedia.org/wikipedia/commons/2/2d/MAM_São_Paulo_Prédio.jpg", "https://pt.wikipedia.org/wiki/MAM_(São_Paulo)", "Visita a museu de arte moderna ou ao Museu Afro Brasil dentro do complexo do Ibirapuera — para quem quiser parte cultural + paisagem do parque.");

// 21/01/2026 — Parque Ibirapuera + MAM/ Museu Afro Brasil
addPasseio(19, "Parque Ibirapuera", "https://upload.wikimedia.org/wikipedia/commons/1/14/Parque_Ibirapuera_SP_lago.jpg", "https://pt.wikipedia.org/wiki/Parque_Ibirapuera", "Caminhada e relax no Parque Ibirapuera — natureza, pavilhões e áreas livres para descanso.");
addPasseio(19, "MAM / Museu Afro Brasil (Ibirapuera)", "https://upload.wikimedia.org/wikipedia/commons/2/2d/MAM_São_Paulo_Prédio.jpg", "https://pt.wikipedia.org/wiki/MAM_(São_Paulo)", "Visita a museu de arte moderna ou ao Museu Afro Brasil dentro do complexo do Ibirapuera — para quem quiser parte cultural + paisagem do parque.");
// ... keep all other existing addPasseio calls the same ...

// ==== Menu toggle (existing) ====
const nav = document.querySelector("#menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("open");
});

document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
        nav.classList.remove("open");
    }
});

document.querySelectorAll("#menu a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
});

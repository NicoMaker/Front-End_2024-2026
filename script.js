// Funzione per contattare tramite email
function contactEmail(cardNumber) {
    window.location.href = `mailto:example@example.com?subject=Contact%20Card%20${cardNumber}`;
}

function openPDF() {
    window.open("https://example.com/your-pdf-link", "_blank");
}

function openGit() {
    window.open("https://github.com/CammarataLudovico/Front-End_2024-2026", "_blank");
}

// Array di oggetti con numero, nome, cognome, email e URL immagine
const cardData = [
    { numero: 1, nome: "Mario", cognome: "Rossi", email: "mario.rossi1@example.com", immagine: "https://picsum.photos/200/150?random=1" },
    { numero: 2, nome: "Mario", cognome: "Rossi", email: "mario.rossi2@example.com", immagine: "https://picsum.photos/200/150?random=2" },
    { numero: 3, nome: "Mario", cognome: "Rossi", email: "mario.rossi3@example.com", immagine: "https://picsum.photos/200/150?random=3" },
    { numero: 4, nome: "Mario", cognome: "Rossi", email: "mario.rossi4@example.com", immagine: "https://picsum.photos/200/150?random=4" },
    { numero: 5, nome: "Mario", cognome: "Rossi", email: "mario.rossi5@example.com", immagine: "https://picsum.photos/200/150?random=5" },
    { numero: 6, nome: "Mario", cognome: "Rossi", email: "mario.rossi6@example.com", immagine: "https://picsum.photos/200/150?random=6" },
    { numero: 7, nome: "Mario", cognome: "Rossi", email: "mario.rossi7@example.com", immagine: "https://picsum.photos/200/150?random=7" },
    { numero: 8, nome: "Mario", cognome: "Rossi", email: "mario.rossi8@example.com", immagine: "https://picsum.photos/200/150?random=8" },
    { numero: 9, nome: "Mario", cognome: "Rossi", email: "mario.rossi9@example.com", immagine: "https://picsum.photos/200/150?random=9" },
    { numero: 10, nome: "Mario", cognome: "Rossi", email: "mario.rossi10@example.com", immagine: "https://picsum.photos/200/150?random=10" },
    { numero: 11, nome: "Mario", cognome: "Rossi", email: "mario.rossi11@example.com", immagine: "https://picsum.photos/200/150?random=11" },
    { numero: 12, nome: "Mario", cognome: "Rossi", email: "mario.rossi12@example.com", immagine: "https://picsum.photos/200/150?random=12" },
    { numero: 13, nome: "Mario", cognome: "Rossi", email: "mario.rossi13@example.com", immagine: "https://picsum.photos/200/150?random=13" },
    { numero: 14, nome: "Mario", cognome: "Rossi", email: "mario.rossi14@example.com", immagine: "https://picsum.photos/200/150?random=14" },
    { numero: 15, nome: "Mario", cognome: "Rossi", email: "mario.rossi15@example.com", immagine: "https://picsum.photos/200/150?random=15" },
    { numero: 16, nome: "Mario", cognome: "Rossi", email: "mario.rossi16@example.com", immagine: "https://picsum.photos/200/150?random=16" },
    { numero: 17, nome: "Mario", cognome: "Rossi", email: "mario.rossi17@example.com", immagine: "https://picsum.photos/200/150?random=17" },
    { numero: 18, nome: "Mario", cognome: "Rossi", email: "mario.rossi18@example.com", immagine: "https://picsum.photos/200/150?random=18" },
    { numero: 19, nome: "Mario", cognome: "Rossi", email: "mario.rossi19@example.com", immagine: "https://picsum.photos/200/150?random=19" },
    { numero: 20, nome: "Mario", cognome: "Rossi", email: "mario.rossi20@example.com", immagine: "https://picsum.photos/200/150?random=20" },
    { numero: 21, nome: "Mario", cognome: "Rossi", email: "mario.rossi21@example.com", immagine: "https://picsum.photos/200/150?random=21" },
    { numero: 22, nome: "Mario", cognome: "Rossi", email: "mario.rossi22@example.com", immagine: "https://picsum.photos/200/150?random=22" },
    { numero: 23, nome: "Mario", cognome: "Rossi", email: "mario.rossi23@example.com", immagine: "https://picsum.photos/200/150?random=23" },
    { numero: 24, nome: "Mario", cognome: "Rossi", email: "mario.rossi24@example.com", immagine: "https://picsum.photos/200/150?random=24" },
    { numero: 25, nome: "Mario", cognome: "Rossi", email: "mario.rossi25@example.com", immagine: "https://picsum.photos/200/150?random=25" }
];


// Generazione dinamica delle card
document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.getElementById("card-container");
    
    cardData.forEach(data => {
        // Creazione del contenitore della card
        const card = document.createElement("div");
        card.className = "col-12 col-sm-6 col-md-4 col-lg-3 col-custom-5";

        // Creazione dell'elemento card interna
        const cardInner = document.createElement("div");
        cardInner.className = "card p-3 shadow-sm";

        // Creazione dell'immagine
        const img = document.createElement("img");
        img.src = data.immagine;
        img.alt = `Image ${data.numero}`;

        // Creazione del numero della card
        const numberDiv = document.createElement("div");
        numberDiv.className = "number";
        numberDiv.textContent = `${data.numero}.`;

        // Creazione del nome e cognome
        const nameDiv = document.createElement("div");
        nameDiv.className = "name";
        nameDiv.textContent = `${data.nome} ${data.cognome}`;

        // Creazione del bottone per contattare via email
        const button = document.createElement("button");
        button.className = "btn btn-primary contact-btn";
        button.textContent = "Invia Mail";
        button.onclick = () => contactEmail(data.email);

        // Appendi gli elementi alla card interna
        cardInner.appendChild(img);
        cardInner.appendChild(numberDiv);
        cardInner.appendChild(nameDiv);
        cardInner.appendChild(button);

        // Appendi la card interna al contenitore della card
        card.appendChild(cardInner);

        // Appendi la card al contenitore principale
        cardContainer.appendChild(card);
    });
});

// Funzione per contattare tramite email con indirizzo specifico
function contactEmail(email) {
    window.location.href = `mailto:${email}?subject=Contact`;
}
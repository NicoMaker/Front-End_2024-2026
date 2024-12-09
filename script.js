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
    { numero: 1, nome: "Adrion", cognome: "Bytyqi", email: "adrion.bytyqi.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/1_Adrion.jpg" },
    { numero: 2, nome: "Ludovico", cognome: "Cammarata", email: "ludovico.cammarata.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/2_Ludovico.jpg" },
    { numero: 3, nome: "Damiano", cognome: "Castellarin", email: "damiano.castellarin.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/3_Damiano.jpg" },
    { numero: 4, nome: "Matteo", cognome: "Celant", email: "matteo.celant.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/4_Matteo.jpg" },
    { numero: 5, nome: "Damiano", cognome: "Da Ros", email: "damiano.daros.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/5_DamianoDaRos.jpg" },
    { numero: 6, nome: "Samuele", cognome: "Drigo", email: "samuele.drigo.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/6_DrigoSamuele.jpg" },
    { numero: 7, nome: "Sara", cognome: "Fnaiqi", email: "sara.fnaiqi.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/7_SaraFnaiqi.jpg"},
    { numero: 8, nome: "Matteo", cognome: "Galante", email: "matteo.galante.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/8_MatteoGalante.jpg" },
    { numero: 9, nome: "Aurora", cognome: "Gasparutti", email: "aurora.gasparutti.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/9_Aurora.jpg" },
    { numero: 10, nome: "Nicolò", cognome: "Gobbo", email: "nicolo.gobbo.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/10_Nicolo.jpg" },
    { numero: 11, nome: "Kawe", cognome: "Longon", email: "kawe.longon.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/11_Kawe.jpg" },
    { numero: 12, nome: "Gaia", cognome: "Mantovani", email: "gaia.mantovani.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/12_Gaia.jpg" },
    { numero: 13, nome: "Nicola", cognome: "Marano", email: "nicola.marano.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/13_Nicola.jpg" },
    { numero: 14, nome: "Denis", cognome: "Mascherin", email: "denis.mascherin.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/14_Denis.jpg" },
    { numero: 15, nome: "Zawadi Emilia", cognome: "Piccolo", email: "zawadiemilia.piccolo.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/15_Zawadi.jpg" },
    { numero: 16, nome: "Marco", cognome: "Prevarin", email: "marco.prevarin.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/16_Prevarin_Marco.jpg" },
    { numero: 17, nome: "Giulia", cognome: "Quaino", email: "giulia.quaino.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/17_GiuliaQuaino.jpg" },
    { numero: 18, nome: "Valentina", cognome: "Rossi", email: "valentina.rossi.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/18_Valentina.jpeg" },
    { numero: 19, nome: "Marco", cognome: "Segato", email: "marco.segato.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/19_MarcoSegato.jpg" },
    { numero: 20, nome: "Brayan Camilo", cognome: "Serraino", email: "brayancamilo.serraino.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/20_Brayan.jpg" },
    { numero: 21, nome: "Alessia", cognome: "Tolotti", email: "alessia.tolotti.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/21_AlessiaTolotti.jpg" },
    { numero: 22, nome: "Luca", cognome: "Villalta", email: "luca.villalta.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/22_villalta_luca.jpg" },
    { numero: 23, nome: "Emanuele", cognome: "Zanchetta", email: "emanuele.zanchetta.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/23_Emanuele.jpg" },
    { numero: 24, nome: "Simone", cognome: "Zoccarato", email: "simone.zoccarato.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/24_Simone_Zoccarato.jpg" },
    { numero: 25, nome: "Giovanni", cognome: "Zol", email: "giovanni.zol.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/25_Giovanni.jpg" }
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
        numberDiv.textContent = `${data.numero}`;

        // Creazione del nome e cognome con <br>
        const nameDiv = document.createElement("div");
        nameDiv.className = "name";
        nameDiv.innerHTML = `${data.nome}<br>${data.cognome}`;

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

/*
Traccia:
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
*/
"use script";

// // Dichiaro le variabili
const countdownCorrection = document.querySelector(".clock-countdown");
const dateNowBox = document.querySelector(".date-now");

const clockTimeCorrection = new Date("Jul 14, 2023 09:30:00").getTime();

countdownCorrection.innerHTML = "La correzione dell'esercizio si terrà il 14 luglio 2023 alle 9:30";

// Stampo la scritta con la data della correzione in un altro box dopo tot che la pagina è stata caricata
setTimeout(function () {
    dateNowBox.innerHTML = "La correzione dell'esercizio si terrà il 14 luglio 2023 alle 9:30";
}, 1000)

// Aggiorno - differenza e contatore
const timeToCorrection = setInterval(function () {

    const now = new Date().getTime();

    const difference = clockTimeCorrection - now;

    // Calcolo il tempo rimanente in ore, minuti e secondi
    let timeLeft = difference;
    const hours = Math.floor(timeLeft / 1000 / 60 / 60);
    timeLeft -= hours * 1000 * 60 * 60;
    const minutes = Math.floor(timeLeft / 1000 / 60);
    timeLeft -= minutes * 1000 * 60;
    const seconds = Math.floor(timeLeft / 1000);
    timeLeft -= seconds * 1000;

    countdownCorrection.innerHTML = `Mancano ${hours} ore ${minutes} minuti e ${seconds} secondi alla correzione`;

    if (difference < 0) {
        clearInterval(timeToCorrection);
        countdownCorrection.innerHTML = "Tempo scaduto - la correzione è iniziata";
    }
}, 1000);
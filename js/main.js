/*
Traccia:
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
*/
"use script";

// Dichiaro le variabili
const countdownCorrection = document.querySelector(".clock-countdown");
const dateNowBox = document.querySelector(".date-now");

let clockNow = new Date();

let clockCorrection = new Date(
    clockNow.getFullYear(),
    clockNow.getMonth(),
    clockNow.getDate() + 1,
    9,
    30,
    0
);

// Aggiorno - data attuale
setInterval(function () {
    clockNow = new Date();
}, 1000);

countdownCorrection.innerHTML = `La correzione dell'esercizio si terrà il ${clockCorrection.getDate()}/${clockCorrection.getMonth()} alle ${clockCorrection.getHours()} e ${clockCorrection.getMinutes()}`;

// Stampo la data attuale
setTimeout(function () {
    dateNowBox.innerHTML = `La correzione dell'esercizio si terrà il ${clockCorrection.getDate()}/${clockCorrection.getMonth()} alle ${clockCorrection.getHours()} e ${clockCorrection.getMinutes()}`;
}, 1000)

// Aggiorno - differenza e contatore
setInterval(function () {
    const difference = clockCorrection.getTime() - clockNow.getTime();
    
    if (difference < 0) {
        countdownCorrection.innerHTML = "Tempo scaduto";
    }

    // Calcolo il tempo rimanente in ore, minuti e secondi
    let timeLeft = difference;
    const hours = Math.floor(timeLeft / 1000 / 60 / 60);
    timeLeft -= hours * 1000 * 60 * 60;
    const minutes = Math.floor(timeLeft / 1000 / 60);
    timeLeft -= minutes * 1000 * 60;
    const seconds = Math.floor(timeLeft / 1000);
    timeLeft -= seconds * 1000;

    countdownCorrection.innerHTML = `Mancano ${hours} ore ${minutes} minuti e ${seconds} secondi alla correzione`;
}, 1000);
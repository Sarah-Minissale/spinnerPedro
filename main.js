//ESERCIZIO SPINNER

// variabile con elemento audio
const music = new Audio("./mp3/music.mp3");

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", startMusic);

const stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopMusic);

const pausaButton = document.getElementById("pausaButton");
pausaButton.addEventListener("click", pausaMusic);

const cntSpinner = document.getElementById("cntSpinner");

stopButton.disabled = true;
pausaButton.disabled = true;

function startMusic() {
    music.play();

    //-> dopo che l ho cliccato devo:

    //disabilitare startButton
    startButton.disabled = true;

    //abilitare stopButton
    stopButton.disabled = false;

    //abilitare pausaButton
    pausaButton.disabled = false;

    //far partire lo spinner
    cntSpinner.classList.add("rotate");

    //lo specifico qui perchè quando non c'era qui in questa funzione ma era nell'if della funzione pausa e premevo start lo spinner rimaneva bloccato
    cntSpinner.style.animationPlayState = "running";
}

function stopMusic() {
    music.pause();
    music.currentTime = 0; //-> con questo rimetto la musica da capo

    //-> dopo che l ho cliccato devo:

    //disabilitare stopButton
    stopButton.disabled = true;

    //abilitare startButton
    startButton.disabled = false;

    //disabilitare pausaButton
    pausaButton.disabled = true;

    //far stoppare lo spinner e riportarlo al punto di partenza
    cntSpinner.classList.remove("rotate");
}

function pausaMusic() {
    /*  music.pause(); */

    //-> dopo che l ho cliccato devo:

    //abilitare stopButton
    stopButton.disabled = false;

    //abilitare startButton
    startButton.disabled = false;

    //far fermare lo spinner nel punto in cui è arrivato
    if (music.paused === true) {
        startMusic();
    } else {
        music.pause();
        cntSpinner.style.animationPlayState = "paused";
    }
}

let Travail = document.getElementById("travail");
let Pause = document.getElementById("pause");

let TravailMinutes = 30;
let PauseMinutes = 30;
let secondes = 0;

function affichageTemps(crono) {
    let TempsSec = TravailMinutes + ":" + (secondes < 10 ? "0" : "") + secondes;
    return TempsSec;
}



window.onload = () => {
    document.getElementsByClassName("minutes").innerHTML = affichageTemps(TravailMinutes);
    document.getElementById("secondes").innerHTML = affichageTemps(secondes);
    TravailMinutes.classList.add('active');
}



function renitialiser() {
    location.reload();
}

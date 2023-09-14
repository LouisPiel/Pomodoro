let Travail = document.getElementById("travail");
let Pause = document.getElementById("pause");

let TravailTemps = 30;
let PauseTemps = 30;
let secondes = 0;

function affichageTemps(crono) {
    let TempsSec = TravailTemps + ":" + (secondes < 10 ? "0" : "") + secondes;
    return TempsSec;
}



window.onload = () => {
    document.getElementById('minutes').innerHTML = affichageTemps(TravailTemps);
    document.getElementById('secondes').innerHTML = affichageTemps(secondes);
    TravailTemps.classList.add('active')
}

function démarrer() {
    document.getElementById('démarrer').style.display = 'none';
    document.getElementById('rénitialiser').style.display = 'block';

    secondes = 59;

    let TravailMinute = TravailTemps - 1;
    let PauseMinute = PauseTemps - 1;

    let changement = false;

    let temps = () => {
        document.getElementById('minutes').innerHTML = affichageTemps(TravailMinute);
        document.getElementById('secondes').innerHTML = affichageTemps(secondes);

        secondes = secondes - 1;

        if (secondes === 0) {
            TravailMinute = TravailMinute - 1;
            if (TravailMinute === -1) {
                if (!changement) {
                    TravailMinute = PauseMinute;
                    changement = true;

                    TravailTemps.classList.remove('active');
                    PauseTemps.classList.add('active');
                } else {
                    TravailMinute = PauseMinute - 1;
                    changement = false;

                    PauseTemps.classList.remove('active');
                    TravailTemps.classList.add('active');

                }
            }
            secondes = 59;
        } 
        
    }
    setInterval(temps, 1000);
}



function rénitialiser() {
    location.reload();
}

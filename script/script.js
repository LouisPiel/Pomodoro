
let Travail = document.getElementById("travail");
let Pause = document.getElementById("pause");

// Déclaration des variables pour initialiser le temps pour le travail et pour la pause.
var TempsT = 1;
var TempsP = 1;

//Variable permettant de initialiser les secondes à 0.
let secondes = 0;


//Fonction pour afficher le temps.
function affichageTemps (chrono) {
    let affichageChrono = chrono.toString()
    affichageChrono  = affichageChrono.length < 2 ? '0' + affichageChrono  : affichageChrono 
    return affichageChrono 
  }


//Fonction pour afficher le temps sur la page.
window.onload = () => {
    document.getElementById('minutes').innerHTML = affichageTemps(TempsT);
    document.getElementById('secondes').innerHTML = affichageTemps(secondes);
}


function démarrer() {
    //Affiche les 2 blocs
    document.getElementById("démarrer").style.display = 'block';
    document.getElementById("rénitialiser").style.display = 'block';
    //la couleur de fond indique quel timer est activé.
    document.getElementById("démarrer").style.backgroundColor = '#27EF16';
    document.getElementById("rénitialiser").style.backgroundColor = '#EC1010';

    //Variable qui permet de faire en sorte que les secondes n'affiche pas 60.
    secondes = 59;

    //Variables qui permet de faire passer décroître les minutes
    let TravailMinute = TempsT - 1;
    let PauseMinute = TempsP - 1;

    // boolean qui permet d'inititialiser le changement du travail à pause à fausse.
     changement = false;

     //Fonction pour permettre que le temps s'écoule.
    let temps = () => {
        document.getElementById('minutes').innerHTML = affichageTemps(TravailMinute);
        document.getElementById('secondes').innerHTML = affichageTemps(secondes);

        secondes = secondes - 1;
        if (secondes == 0) {
            TravailMinute = TravailMinute - 1;
            if (TravailMinute == -1) {
                if (!changement) {
                    TravailMinute = PauseMinute;
                    secondes = 60;
                    changement = true;
                    TravailTemps.classList.remove('active');
                    PauseTemps.classList.add('active');

                    document.getElementById("démarrer").style.backgroundColor = '#EC1010';
                    document.getElementById("rénitialiser").style.backgroundColor = '#27EF16';
                } else {
                    TravailMinute = TempsT;
                    secondes = 1;
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


//Fonction pour rénitialiser le temps à la valeur de départ.
function rénitialiser() {
    location.reload();
}

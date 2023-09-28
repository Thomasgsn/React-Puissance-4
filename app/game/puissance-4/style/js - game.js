//boutton NewGame
const PlayButton_btn = document.querySelector(".PlayButton-btn")
//boutton Jouer
const Buttons = document.querySelector(".buttons")
//compteurs du scoreboard
const compteur1 = document.getElementById('compteur1');
const compteur2 = document.getElementById('compteur2');

PlayButton_btn.addEventListener('click', () => {
    Buttons.classList.toggle('EventClick-btn')
})


function createBoard(ligne, colonne) {
    // On vide l'affichage de notre page
    contenuElt.innerHTML = "";
    // On créé l'élément 'table'
    let tableElt = document.createElement('table');
    // On créé une boucle for pour crée nos lignes
    for (let i = 0; i < ligne; i++) {
        board[i] = [];
        // On créé notre élément 'tr'
        let ligneElt = document.createElement('tr');
        //Chaque ligne aura son id avec 'L' + son numéro
        ligneElt.id = "L" + i;
        // On Créé on boule for pour créé nos colonne sur notre ligne
        for (let j = 0; j < colonne; j++) {
            // Nos cases son initialisé avec 0
            board[i][j] = 0;
            // On créé notre élément 'td'
            let colonneElt = document.createElement('td');
            colonneElt.id = "L" + i + "C" + j;
            // Nos colonne auront pour id L + leur  numéro de ligne + C + leur numéro
            ligneElt.appendChild(colonneElt);
        }

        // On Ajoute nos lignes + colonnes au tableau
        tableElt.appendChild(ligneElt);
    }

    // On met notre tableau sur la page
    contenuElt.appendChild(tableElt);
}

document.getElementById("cross").style


// Fonction d'initialisation d'une nouvelle partie
function newGame() {
    createBoard(ligne, colonne);
    createEvent(ligne, colonne);
    document.title = "Jeu en cours";
    PlayButton_btn.setAttribute("disabled", "true");
    document.querySelector('#newGame').innerHTML = "Nouvelle Partie !"
    document.getElementById("cross").style.opacity = '0.5';
    document.documentElement.style.overflow = 'hidden';
    window.scrollTo(0, 650);
}

// Fonction d'ajout des évènement click sur le tableau
function createEvent(ligne, colonne) {
    // On créé les évènements sur les cases
    for (let i = 0; i < ligne; i++) {
        for (let j = 0; j < colonne; j++) {
            //ajoutEventCase(i,j);
            let caseElt = document.getElementById("L" + i + "C" + j);
            caseElt.addEventListener('click', clickEvent);
        }
    }
}

// Fonction clickEvent
function clickEvent() {
    let l = Number(this.id.charAt(3));
    let k = ligne - 1;
    while (k > -1) {
        if (board[k][l] === 0) {
            let caseMinElt = document.getElementById("L" + k + "C" + l);
            let divElt = document.createElement('div');
            divElt.className = "player";
            caseMinElt.appendChild(divElt);
            divElt.style.backgroundColor = player === 1 ? 'rgb(222, 208, 51)' : 'rgb(255, 70, 30)';
            board[k][l] = player;
            // Ici placé la vérification de victoire
            verifVictoire(k, l);
            player *= -1;
            k = -1;
        } else {
            k--
        }
    }
}


// Fonction de Vérification de victoire
function verifVictoire(i, j) {
    // Vérification horizontale
    let countLigne = 0;
    let h = 0;
    while (h < colonne) {
        if (board[i][h] === player) {
            countLigne++;
            h++;
        } else if (board[i][h] !== player && countLigne === 4) {
            h++;
        } else {
            countLigne = 0;
            h++;
        }
    }

    // Vérification verticale
    let countColonne = 0;
    let v = 0;
    while (v < ligne) {
        if (board[v][j] === player) {
            countColonne++;
            v++;
        } else if (board[v][j] !== player && countColonne === 4) {
            v++;
        } else {
            countColonne = 0;
            v++;
        }
    }

    // Vérification diagonale
    let countDiag = 0;
    let d = -Math.min(i, j);

    while (i + d < ligne && j + d < colonne && i + d >= 0 && j + d >= 0) {

        if (board[i + d][j + d] === player) {
            countDiag++;
            d++;
        } else if (board[i + d][j + d] !== player && countDiag === 4) {
            d++;
        } else {
            countDiag = 0;
            d++;
        }
    }

    // Vérification anti-diagonale
    let countAntiDiag = 0;
    let a = -Math.min(i, colonne - 1 - j);
    while (i + a < ligne && j - a < colonne && i + a >= 0 && j - a >= 0) {
        if (board[i + a][j - a] === player) {
            countAntiDiag++;
            a++;
        } else if (board[i + a][j - a] !== player && (countAntiDiag === 4)) {
            a++;
        } else {
            countAntiDiag = 0;
            a++;
        }
    }


    // Affichage Résultat
    if (countLigne >= 4 || countColonne >= 4 || countDiag >= 4 || countAntiDiag >= 4) {

        // Affichage Vainqueur
        document.documentElement.style.overflow = 'auto';
        document.getElementById("cross").style.opacity = '0';
        document.title = "Partie finie";
        let gagnant = (player === 1) ? "Joueur 1" : "Joueur 2";
        let victoireElt = document.createElement('div');
        victoireElt.innerHTML = "<h2 id=vainqueur>Le vainqueur est le " + gagnant + " </h2>";
        contenuElt.appendChild(victoireElt);
        // On supprime les évènements clics
        for (let i = 0; i < ligne; i++) {
            for (let j = 0; j < colonne; j++) {
                let caseElt = document.getElementById("L" + i + "C" + j);
                caseElt.style.backgroundColor = "black";
                caseElt.removeEventListener('click', clickEvent);

            }
        }

    } else {
        console.log("tour suivant");
        // Affichage Tour suivant
    }
}


// Initialisation
let colonne = 7;
let ligne = 6;
let board = [];
let contenuElt = document.getElementById('contenu');
let player = 1;

let boutonElt = document.getElementById('newGame');
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", function () {
    // Joueur 1 est le joueur vert


    player = 1;
    newGame();
});

let compteurs = [0, 0];


function incrementer(index) {
    compteurs[index]++;
    if (index === 0) {
        compteur1.innerHTML = compteurs[index];
    } else {
        compteur2.innerHTML = compteurs[index];
    }
}

function decrementer(index) {
    if (compteurs[index] > 0) {
        compteurs[index]--;
        if (index === 0) {
            compteur1.innerHTML = compteurs[index];
        } else {
            compteur2.innerHTML = compteurs[index];
        }
    }
}

function reset() {
    compteurs = [0, 0];
    compteur1.innerHTML = compteurs[0];
    compteur2.innerHTML = compteurs[1];
}

function cross() {
    document.documentElement.style.overflow = 'auto';
    window.scrollTo(0, 200);
    document.getElementById("cross").style.opacity = '0';
}

function jouer() {
    window.scrollTo(0, 200);

}
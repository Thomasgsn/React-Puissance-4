import React, {useRef, useEffect} from 'react';

const handleClick = (event) => {
    let colonneClick = event.target.id.charAt(0)
};

function click() {
    let l = this.getAttribute("id");
    console.log(l);
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

export const Six_sept = () => {

    const colonnes = ['1', '2', '3', '4', '5', '6'];
    const lignes = ['1', '2', '3', '4', '5', '6', '7'];

    return (
        <table className="scale tableau" id="6x7">
            {colonnes.map(colonne => (
                <tr className="border border-neutral-700 h-24">
                    {lignes.map(ligne => (
                        <td onClick={handleClick} id={ligne + "x" + colonne}
                            className="border border-neutral-700 w-24">{ligne}x{colonne}</td>))}
                </tr>
            ))}
        </table>
    );
}


export const Quatre_cinq = () => {

    const colonnes = ['1', '2', '3', '4'];
    const lignes = ['1', '2', '3', '4', '5'];

    return (
        <table className="scale tableau" id="6x7">
            {colonnes.map(colonne => (
                <tr className="border border-neutral-700 h-24">
                    {lignes.map(ligne => (
                        <td onClick={handleClick} id={ligne + "x" + colonne}
                            className="border border-neutral-700 w-24">{ligne}x{colonne}</td>))}
                </tr>
            ))}
        </table>
    );
}


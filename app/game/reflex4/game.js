'use client';
import React, {useEffect, useState} from 'react';
import {Settings} from 'lucide-react';
import Button from "../../components/buttons/button";
import ButtonToggle from "../../components/buttons/buttonToggle";

const Game = () => {
    const typesTime = [5, 10, 15, 20];
    const [activeTime, setActiveTime] = useState(typesTime[0]);
    const [timeRemaining, setTimeRemaining] = useState(activeTime);

    const [squares, setSquares] = useState(Array(4).fill(false));

    const [scoreA, setScoreA] = useState(0);
    const [bestscore, setBestscore] = useState(0);
    const [previousscore, setPreviousscore] = useState(0);

    const [gameStarted, setGameStarted] = useState(false);
    const [lastClickedSquare, setLastClickedSquare] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [isDisabled, setDisabled] = useState(false)

    const getRandomSquare = () => Math.floor(Math.random() * 4);

    const getNewRandomSquare = (oldSquare) => {
        let newSquare;
        do {
            newSquare = getRandomSquare();
        } while (newSquare === oldSquare);
        return newSquare;
    };

    const startGame = () => {
            setDisabled(true);
            setGameOver(false);
            setGameStarted(true);
            setTimeRemaining(activeTime);

            const randomIndex = getRandomSquare();
            const newSquares = Array(4).fill(false);
            newSquares[randomIndex] = true;
            setSquares(newSquares);

            setScoreA(0); // Réinitialise le score actuel
            setLastClickedSquare(randomIndex);
    };

    const handleSquareClick = (index) => {
        if (squares[index] && !gameOver) {
            const newSquares = Array(4).fill(false);
            const randomIndex = getNewRandomSquare(lastClickedSquare);
            newSquares[randomIndex] = true;
            setSquares(newSquares);
            setScoreA(scoreA + 1);
            setLastClickedSquare(randomIndex);
        } else if (!squares[index] && !gameOver) {
            if (scoreA > 0) {
                setScoreA(scoreA - 1);
            }
        }
    };

    useEffect(() => {
    }, [squares, gameStarted]);

    useEffect(() => {
        if (gameStarted && timeRemaining > 0) {
            const timer = setInterval(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeRemaining <= 0) {
            setDisabled(false);
            setGameStarted(false);
            setGameOver(true);
            setSquares(Array(4).fill(false));

            if (scoreA / activeTime > bestscore) {
                setBestscore(scoreA / activeTime);
            }

            setPreviousscore(scoreA / activeTime);

            setTimeRemaining(activeTime); // Réinitialise le compteur à la valeur activeTime
        }
    }, [activeTime, gameStarted, timeRemaining]);

    const [isVerticalLayout, setIsVerticalLayout] = useState(false);

    const toggleLayout = () => {
        setIsVerticalLayout(!isVerticalLayout);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isParamVisible, setIsParamVisible] = useState(false);

    const displayP = () => {
        setIsParamVisible(!isParamVisible);
    };

    return (
        <>
            <div className="w-screen flex justify-center">
                <div>
                    <div className="absolute left-40">
                        <Button onClick={displayP}
                                className="rounded-full whitespace-nowrap">
                            <div className="flex justify-center gap-2">
                                <Settings/>
                                <p className="mt-[-.3rem]">Paramètre</p>
                            </div>
                        </Button>
                        {isParamVisible &&
                            <div className="">
                                <h4 className='mt-[-.5rem]'>Temps en seconde</h4>
                                <div className="mb-2">
                                    {typesTime.map((type) => (
                                        // eslint-disable-next-line react/jsx-key
                                        <ButtonToggle
                                            active={activeTime === type}
                                            onClick={() => {
                                                setActiveTime(type);
                                                setTimeRemaining(type)
                                            }}>
                                            {type}
                                        </ButtonToggle>
                                    ))}
                                </div>

                                <div className="mt-[-1rem]">
                                    <Button disabled={isDisabled} onClick={toggleLayout}>Changer la
                                        disposition</Button>
                                </div>
                            </div>
                        }
                    </div>
                    <div>
                        <Button
                            disabled={true}
                            className="font-semibold w-32 border-t-neutral-500 text-xl rounded-lg"
                            onClick={startGame}>
                            Jouer
                        </Button>

                        <p>Temps restant : {timeRemaining} secondes</p>
                        <p>Carré touché : {scoreA}</p>
                        <p>Meilleur score <i>c/s</i> : {bestscore}</p>
                        <p>Score précédent <i>c/s</i> : {previousscore}</p>

                        <div
                            className={isVerticalLayout ? "absolute squareCenter flex-col" : "absolute squareCenter flex"}>
                            <div className="flex">
                                {squares.slice(0, 2).map((isGreen, index) => (
                                    <div
                                        key={index}
                                        className={`squarePlay mx-4 ${isGreen ? 'greenSquare' : 'redSquare'}`}
                                        id={index}
                                        onClick={() => handleSquareClick(index)}
                                    ></div>
                                ))}
                            </div>
                            {isVerticalLayout && <br/>}
                            <div className="flex">
                                {squares.slice(2, 4).map((isGreen, index) => (
                                    <div
                                        key={index + 2}
                                        className={`squarePlay mx-4 ${isGreen ? 'greenSquare' : 'redSquare'}`}
                                        id={index + 2}
                                        onClick={() => handleSquareClick(index + 2)}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
        ;
};

export default Game;
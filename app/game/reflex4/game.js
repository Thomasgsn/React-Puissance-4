'use client';
import React, {useEffect, useState} from 'react';
import {Settings} from 'lucide-react';
import styled from 'styled-components';
import Display from "../puissance-4/display";

const Button = styled.button`
  background-color: #f57e7e;
  font-size: 20px;
  color: white;
  padding: 5px 15px;
  outline: 0;
  margin: 20px 10px 10px 0;
  cursor: pointer;
  transition: all .3s cubic-bezier(0, 0.59, 0.33, 0.87);

  &:hover {
    opacity: 0.8;
    background-color: #2f5e6d;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(255, 255, 255, 01);
    box-shadow: 5px 5px 15px 5px rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
  }

  &:disabled {
    cursor: default;
    opacity: 0.3;
  }

  &:disabled:hover {
    cursor: not-allowed;
    background-color: #be1717;
    opacity: 0.3;
  }
`;

const ButtonToggle = styled(Button)`
  transition: all 0.3s;
  opacity: 0.3;
  ${({active}) => active && `
    opacity: 1; 
  `}
`;

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
        setGameStarted(true);
        setGameOver(false);
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
                                            disabled={isDisabled}
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
'use client';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: green;
  font-size: 20px;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  margin: 20px 10px 10px 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    box-shadow: 0 2px 2px lightgray;
  }

  &:disabled {
    cursor: default;
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
    const [squares, setSquares] = useState(Array(4).fill(false));
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [lastClickedSquare, setLastClickedSquare] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState(activeTime);
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
        setScore(0); // Réinitialise le score
        setLastClickedSquare(randomIndex);
    };

    const handleSquareClick = (index) => {
        if (squares[index] && !gameOver) {
            const newSquares = Array(4).fill(false);
            const randomIndex = getNewRandomSquare(lastClickedSquare);
            newSquares[randomIndex] = true;
            setSquares(newSquares);
            setScore(score + 1);
            setLastClickedSquare(randomIndex);
        } else if (!squares[index] && !gameOver) {
            if (score > 0) {
                setScore(score - 1);
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
            setTimeRemaining(activeTime); // Réinitialise le compteur à la valeur activeTime
        }
    }, [activeTime, gameStarted, timeRemaining]);

    const [isVerticalLayout, setIsVerticalLayout] = useState(false);

    const toggleLayout = () => {
        setIsVerticalLayout(!isVerticalLayout);
    };

    return (
        <>
            <div>
                {typesTime.map((type) => (
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
                <Button disabled={isDisabled} onClick={toggleLayout}>Changer la disposition</Button>
            </div>

            <div>
                <button
                    className="font-semibold transition hover:bg-amber-200 bg-amber-100 w-32 border-t-neutral-500 text-xl rounded-lg mb-5"
                    onClick={startGame}>
                    Jouer
                </button>

                <p>Score: {score}</p>
                <p>Temps restant : {timeRemaining} secondes</p>

                <div className={isVerticalLayout ? "absolute squareCenter flex-col" : "absolute squareCenter flex"}>
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
        </>
    );
};

export default Game;
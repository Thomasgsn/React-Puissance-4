"use client"
import Image from 'next/image';
import Link from "next/link";
import {User} from 'lucide-react';
import styled from "styled-components";
import React from "react";

const GameSelector = styled.div`
  color: aqua;
  background-color: #f57e7e;
  text-align: left;
  padding: 1.25rem 1rem;
  width: 17rem;
  height: 17rem;
  border-radius: .5rem;
  transition: all .3s cubic-bezier(0, 0.59, 0.33, 0.87);
  border: .25rem solid #2f5e6d;


  &:hover {
    background-color: #2f5e6d;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.4);
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.4);
    transform: scale(1.05);
  }

`

export default function Home() {
    return (
        <>
            <h1 className={`mt-5 text-xl mb-3 font-bold italic drop-shadow-[0_0px_25px_rgba(5,170,159,100)]`}>GAME</h1>


                <div className="w-screen flex gap-5 justify-center">
                    <Link href="/game/puissance-4">
                        <GameSelector>
                            <h2 className={`text-lg mb-3  font-semibold`}>Puissance 4{' '}
                                <span>
                                </span>
                            </h2>
                            <p className={`text-sm m-0 max-w-[30ch] opacity-50`}>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Aligner 4 pions horizontalement, verticalement ou en diagonale.
                            </p>
                            <div className="flex justify-center mt-7 mb-3 img-jeu">
                                <Image
                                    src="/puissance4.jpg"
                                    alt="Puissance 4"
                                    className="rounded-lg"
                                    width={100}
                                    height={100}
                                    priority
                                />
                            </div>
                        </GameSelector>
                    </Link>

                    <Link href="/game/tic_tac_toe">
                        <GameSelector>
                            <h2 className={`text-lg mb-3  font-semibold`}>Tic Tac Toe{' '}
                                <span>
                                </span>
                            </h2>
                            <p className={`text-sm p m-0 max-w-[30ch] opacity-50`}>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Aligner 3 pions horizontalement, verticalement ou en diagonale.
                            </p>
                            <div className="flex justify-center mt-7 mb-3 img-jeu">
                                <Image
                                    src="/tic-tac-toe.jpg"
                                    alt="Tic Tac Toe"
                                    className="rounded-lg"
                                    width={100}
                                    height={100}
                                    priority
                                /></div>
                        </GameSelector>
                    </Link>

                    <Link href="/game/snake">
                        <GameSelector>
                            <h2 className={`text-lg mb-3  font-semibold`}>Snake{' '}
                                <span>
                                </span>
                            </h2>
                            <p className={`text-sm p m-0 max-w-[30ch] opacity-50`}>
                                Ramasser la nourriture qui apparait, sans se coincer.
                            </p>
                            <div className="flex justify-center mt-7 mb-3 img-jeu">
                                <Image
                                    src="/snake.jpg"
                                    alt="Snake"
                                    className="rounded-lg"
                                    width={100}
                                    height={100}
                                    priority
                                /></div>
                        </GameSelector>
                    </Link>

                    <Link href="/game/casse_brique">
                        <GameSelector>
                            <h2 className={`text-lg mb-3 font-semibold`}>Casse brique{' '}
                                <span>
                                </span>
                            </h2>
                            <p className={`text-sm p m-0 max-w-[30ch] opacity-50`}>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Détruire toutes les briques grâce à la balle rebondissante.
                            </p>
                            <div className="flex justify-center mt-7 mb-3 img-jeu">
                                <Image
                                    src="/casse-brique.jpg"
                                    alt="Casse brique"
                                    className="rounded-lg"
                                    width={100}
                                    height={100}
                                    priority
                                /></div>
                        </GameSelector>
                    </Link>

                    <Link href="/game/reflex4">
                        <GameSelector>
                            <h2 className={`text-lg mb-3  font-semibold`}>Reflex 4{' '}
                                <span>
                                </span>
                            </h2>
                            <p className={`text-sm m-0 max-w-[30ch] opacity-50`}>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Clique le plus rapidement sur le carré qui s'allume.
                            </p>
                            <div className="flex justify-center mt-7 mb-3 img-jeu">
                                <Image
                                    src="/reflex4.png"
                                    alt="reflex 4"
                                    className="rounded-lg"
                                    width={100}
                                    height={100}
                                    priority
                                /></div>
                        </GameSelector>
                    </Link>
                </div>
        </>
    )
}
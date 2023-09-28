"use client"
import Image from 'next/image';
import Link from "next/link";
import {User} from 'lucide-react';

function Welcome(props) {

    if (props.username != null) {
        return (
            <Link href="/user">
                <div
                    className="btn hover:cursor-pointer bg-emerald-300 p-3 rounded-lg absolute top-5 right-5 flex justify-center gap-2">
                    <User color="black" size={24}/>
                    <p>Bonjour, {props.name}</p>
                </div>
            </Link>
        )
    } else {
        return (
            <Link href="/user/connect">
                <div
                    className="btn hover:cursor-pointer bg-emerald-300 p-3 rounded-lg absolute top-5 right-5 flex justify-center gap-3">
                    <User color="black" size={24}/>
                    <p>Se connecter !</p>
                </div>
            </Link>
        )
    }
}

export default function Home() {
    return (
        <>
            <Welcome/>


            <main className="flex min-h-screen flex-col items-center w-full">
                <Image
                    src="/logo.png"
                    alt="Abstract Blow Logo"
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                    width={300}
                    height={72}
                    priority
                />
                <h1 className={`mt-5 text-xl mb-3 font-bold italic drop-shadow-[0_0px_25px_rgba(5,170,159,100)]`}>GAME</h1>

                <div
                    className="flex gap-2 content-center translate-y-5">
                    <Link href="/game/puissance-4">
                        <div
                            className="div-jeu text-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black/[.05] hover:bg-black/[.06] hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                            rel="noopener noreferrer">
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
                                /></div>
                        </div>
                    </Link>
                    <Link href="/game/tic_tac_toe">
                        <div
                            className="div-jeu text-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black/[.05] hover:bg-black/[.06] hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                            rel="noopener noreferrer">
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
                        </div>
                    </Link>
                    <Link href="/game/snake">
                        <div
                            className="div-jeu text-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black/[.05] hover:bg-black/[.06] hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                            rel="noopener noreferrer">
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
                        </div>
                    </Link>
                    <Link href="/game/casse_brique">
                        <div
                            className="div-jeu text-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black/[.05] hover:bg-black/[.06] hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                            rel="noopener noreferrer">
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
                        </div>
                    </Link>
                </div>
            </main>
        </>
    )
}
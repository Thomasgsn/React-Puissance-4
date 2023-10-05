import react from 'react'
import Link from "next/link";

const puissance4 = () => {

    return (
        <>
            <div className="flex justify-center">
                <div className="inline w-full">


                    <Link
                        className="shadow-lg hover:bg-cyan-400 bg-teal-500 hover:shadow-black/20 transition ease-in-out scale-50 hover:scale-[.55] px-5 py-3 flex fixed rounded-full align-middle justify-center -right-2 top-0"
                        href="../game">
                        <div className="font-bold text-3xl text-slate-50">Retour</div>
                    </Link>


                    <div className="text-center underline text-3xl mb-8">Puissance 4</div>


                    <div>
                        <div className="flex justify-between gap-2">


                            <div className="border border-neutral-500 rounded-2xl p-8">
                                <h1 className="text-center text-2xl mb-5 font-bold">Taille du tableau</h1>
                                <div className="flex justify-center gap-5">
                                    <button
                                        className="font-semibold transition hover:bg-amber-200 bg-amber-100 w-32 border-t-neutral-500 text-xl rounded-lg">6
                                        x 7
                                    </button>
                                    <button
                                        className="font-semibold transition hover:bg-amber-200 bg-amber-100 w-32 border-t-neutral-500 text-xl rounded-lg">4
                                        x 5
                                    </button>
                                </div>
                            </div>


                            <div className="border border-neutral-500 rounded-2xl p-8">
                                <h1 className="text-center text-2xl mb-5 font-bold">Joueurs</h1>
                                <div className="flex justify-center gap-5">
                                    <button
                                        className="font-semibold transition hover:bg-amber-200 bg-amber-100 w-32 border-t-neutral-500 text-xl rounded-lg">1
                                        Vs 1
                                    </button>
                                    <button
                                        className="font-semibold transition hover:bg-amber-200 bg-amber-100 w-32 border-t-neutral-500 text-xl rounded-lg">1
                                        VS Bot
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default puissance4


/*      SNAKE PARCE QU'ÉMILIEN EST TRES CON

import react from 'react'
import Link from "next/link";
import './menu'

const snake = () => {

    return (
         <>
            <div className="flex justify-center">
                <div className="inline w-full">
                    <Link
                        className="shadow-lg hover:bg-cyan-400 bg-teal-500 hover:shadow-black/20 transition ease-in-out scale-50 hover:scale-[.55] px-5 py-3 flex fixed rounded-full align-middle justify-center -right-2 top-0"
                        href="../game">
                        <div className="font-bold text-3xl text-slate-50">Retour</div>
                    </Link>
                    <div className="text-center underline text-3xl">Snake</div>
                </div>
            </div>
        </>
    );

}

export default snake;

 */
import react from 'react'
import Link from "next/link";
import './style/menu.css'

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
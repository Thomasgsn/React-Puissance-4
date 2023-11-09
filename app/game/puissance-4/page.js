'use client';
import React, {useState} from 'react';
import Link from "next/link";
import styled from 'styled-components';
import Display from "./param";

const puissance4 = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isParamVisible, setIsParamVisible] = useState(false);

    const displayParam = () => {
        setIsParamVisible(!isParamVisible);
    };

    return (
        <>
            <div id='body'>

                <Link
                    className="shadow-lg hover:bg-cyan-400 bg-teal-500 hover:shadow-black/20 transition ease-in-out scale-50 hover:scale-[.55] px-5 py-3 flex fixed rounded-full align-middle justify-center -right-2 top-0"
                    href="../game">
                    <div className="font-bold text-3xl text-slate-50">Retour</div>
                </Link>

                <div className="text-center underline text-3xl mb-8">Puissance 4</div>
                <button onClick={displayParam}
                        className="font-semibold transition hover:bg-amber-200 bg-amber-100 w-32 border-t-neutral-500 text-xl rounded-lg">Jouer
                </button>
                            {isParamVisible && <Display/>}
            </div>
        </>
    )
}

export default puissance4
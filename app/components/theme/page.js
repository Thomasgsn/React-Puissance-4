"use client"
import {useState, useEffect} from "react";
import Link from "next/link";

const theme = () => {


    let [theme, setTheme] = useState('light')

    const changeTheme = () => {
        if (setTheme('light')) {
            setTheme('dark')
        }
        if (setTheme('dark')) {
            setTheme('light')
        }
    }

    useEffect(() => {
        console.log('ca work')
    }, [theme])


    return (
        <>
            <div className=" rounded-lg retour"><Link href="../game">Retour</Link></div>
            <button className="bg-amber-300 border-neutral-700" onClick={() => changeTheme()}>{theme}</button>
        </>
    )
}

export default theme

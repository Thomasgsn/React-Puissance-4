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
                    <p>Se connecter</p>
                </div>
            </Link>
        )
    }
}

export default function Home() {
    return (
        <>
            <Welcome/>

        </>
    )
}
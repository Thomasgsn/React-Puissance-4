import react from 'react'
import Link from "next/link";

const connect = () => {
    return (
        <>
            <div className="w-full">
                <form method='POST' className="inline-grid">

                    <span className="font-semibold">Nom d'utilisateur :</span>
                    <input className="w-200 h-100 bg-emerald-300 mb-2" type="text" name="username"/>

                    <span className="font-semibold">Mot de passe :</span>
                    <input className="w-200 h-100 bg-emerald-300 mb-2" type="text" name="password"/>

                    <Link href="../game"><h1>Se connecter</h1></Link>

                </form>
            </div>
        </>
    )
}

export default connect
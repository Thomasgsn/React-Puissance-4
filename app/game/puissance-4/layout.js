import './style/main.css'
export const metadata = {
    title: 'Abstract Blow - Puissance 4',
    description: 'Abstract Blow - Puissance 4',
}

export default function RootLayout({children}) {
    {
        return (
            <html lang="fr">
            <body>{children}</body>
            </html>
        )
    }
}
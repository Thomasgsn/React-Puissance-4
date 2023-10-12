import './style/main.css'
export const metadata = {
    title: 'Abstract Blow - Reflex 4',
    description: 'Abstract Blow - Reflex 4',
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
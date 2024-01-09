import '../styles/globalslight.css'
export const metadata = {
    title: 'Abstract Blow Game',
    description: 'Game',
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
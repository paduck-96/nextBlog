import {ReactNode} from "react";

interface layoutProps {
    children: ReactNode
}

export default function RootLayout({ children }: layoutProps) {
    return (
        <html lang="en">
            <body>
            <header>
                [header]
            </header>
            <main>
                {children}
            </main>
            <footer>
                [footer]
            </footer>
            </body>
        </html>
    );
}
import {ReactNode} from "react";
import "./global.css"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {dongle, hiMelody} from "./font";

interface layoutProps {
    children: ReactNode
}

export default function RootLayout({ children }: layoutProps) {
    return (
        <html lang="en" className={`${hiMelody.variable} ${dongle.variable}`}>
            <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
                <header>
                    <NavBar />
                </header>
                <main className="grow py-3">
                    {children}
                </main>
                <footer className="border-t py-3 text-center text-xs">
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
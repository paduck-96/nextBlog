import {ReactNode} from "react";
import "./global.css"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {dongle, hiMelody} from "./font";
import {Metadata} from "next";

interface layoutProps {
    children: ReactNode
}

export const metadata: Metadata = {
    title: {
        default: 'Paduck Simple Blog',
        template: '%s | Paduck Blog',
    },
};

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
                <footer className="border-t py-3 text-center text-slate-500 text-xs">
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
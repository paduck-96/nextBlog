import {ReactNode} from "react";
import Link from "next/link";
import "./global.css"
import NavBar from "../components/NavBar";

interface layoutProps {
    children: ReactNode
}

export default function RootLayout({ children }: layoutProps) {
    return (
        <html lang="en">
            <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
                <header>
                    <NavBar />
                </header>
                <main className="grow py-3">
                    {children}
                </main>
                <footer className="border-t py-3 text-center text-xs">
                    {/*해당 부분은 요구사항에 맞춰 작성될 예정*/}
                </footer>
            </body>
        </html>
    );
}
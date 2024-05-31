import {ReactNode} from "react";
import Link from "next/link";
import "./global.css"

interface layoutProps {
    children: ReactNode
}

export default function RootLayout({ children }: layoutProps) {
    return (
        <html lang="en">
            <body>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/recap" prefetch={false}>Reviews</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                {/*해당 부분은 요구사항에 맞춰 작성될 예정*/}
            </footer>
            </body>
        </html>
    );
}
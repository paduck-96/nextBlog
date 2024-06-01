import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <ul className="flex gap-2">
                <li>
                    <Link href="/"
                          className="font-hiMelody font-bold text-orange-800 hover:underline">
                        Home
                    </Link>
                </li>
                <li className='ml-auto'>
                    <Link href="/recaps" prefetch={false}
                          className="text-orange-800 hover:underline">
                        Recaps
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
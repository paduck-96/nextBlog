import Link from "next/link";
import Heading from "@/components/Heading";

export default function RecapPage() {
    return (
        <>
            <Heading>Recaps</Heading>
            <ul className="flex flex-col gap-3">
                <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
                    <Link href="/recap/1">
                        <h2 className="py-1 text-center font-hiMelody font-semibold">
                            Next.js
                        </h2>
                    </Link>
                </li>
            </ul>
        </>
    );
}
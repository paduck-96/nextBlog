import Link from "next/link";
import Heading from "@/components/Heading";
import {getRecaps} from "@/lib/recaps";

export default async function RecapPages() {
    const recaps = await getRecaps();

    return (
        <>
            <Heading>Recaps</Heading>
            <ul className="flex flex-col gap-3">
                <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
                    <Link href="/recaps/next_static">
                        <h2 className="py-1 text-center font-hiMelody font-semibold">
                            Next.js
                        </h2>
                    </Link>
                </li>
            </ul>
        </>
    );
}
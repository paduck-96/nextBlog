import Link from "next/link";
import Heading from "@/components/Heading";
import {getRecaps} from "@/lib/recaps";

export default async function RecapPages() {
    const recaps = await getRecaps();

    return (
        <>
            <Heading>Recaps</Heading>
            <ul className="flex flex-row flex-wrap gap-3">
                {recaps.map((recap) => (
                    <li key={recap.slug}
                        className="bg-white border rounded shadow w-80 hover:shadow-xl">
                        <Link href={`/recaps/${recap.slug}`}>
                            <img src={recap.image} alt=""
                                 width="320" height="180" className="rounded-t"
                            />
                            <h2 className="font-orbitron font-semibold py-1 text-center">
                                {recap.title}
                            </h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
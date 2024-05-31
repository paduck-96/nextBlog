import Link from "next/link";
import Heading from "@/components/Heading";

export default function RecapPage() {
    return (
        <>
            <Heading>Recaps</Heading>
            <ul>
                <li>
                    <Link href="/recap/1">
                        Hollow Knight
                    </Link>
                </li>
            </ul>
        </>
    );
}
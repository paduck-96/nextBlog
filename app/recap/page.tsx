import Link from "next/link";
import Heading from "../../components/Heading";

export default function RecapPage() {
    return (
        <>
            <Heading>Recaps</Heading>
            <ul>
                <li>
                    <Link href="/recap/hollow-knight">
                        Hollow Knight
                    </Link>
                </li>
                <li>
                    <Link href="/recap/stardew-valley">
                        Stardew Valley
                    </Link>
                </li>
            </ul>
        </>
    );
}
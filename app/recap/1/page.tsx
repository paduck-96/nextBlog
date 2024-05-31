import Heading from "@/components/Heading";
import {readFile} from "node:fs/promises";

export default async function One() {
    const text = await readFile('./content/recap/1.md', 'utf8')
    return (
        <>
            <Heading>Next.js Review</Heading>
            <img src="" alt=""
                 width="640" height="360" className="mb-2 rounded"
            />
            <p>
                {text}
            </p>
        </>
    );
}
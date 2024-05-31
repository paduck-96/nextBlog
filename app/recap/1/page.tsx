import Heading from "@/components/Heading";
import {readFile} from "node:fs/promises";
import {marked} from "marked";

export default async function One() {
    const text = await readFile('./content/recap/1.md', 'utf8')
    const html = marked(text)
    return (
        <>
            <Heading>Next.js Review</Heading>
            <img src="" alt=""
                 width="640" height="360" className="mb-2 rounded"
            />
            <article dangerouslySetInnerHTML={{__html: html}}
                     className="max-w-screen-sm prose prose-slate"
            />
        </>
    );
}
import Heading from "@/components/Heading";
import {getRecap} from "@/lib/recap";

export default async function One() {
    const review = await getRecap('1');


    return (
        <>
            <Heading>{review.title}</Heading>
            <p className="italic pb-2">{review.date}</p>
            <img src={review.image} alt="next.js image"
                 width="640" height="360" className="mb-2 rounded"
            />
            <article dangerouslySetInnerHTML={{__html: review.body}}
                     className="max-w-screen-sm prose prose-slate"
            />
        </>
    );
}
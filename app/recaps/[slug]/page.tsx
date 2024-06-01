import Heading from "@/components/Heading";
import {getRecap, getSlugs} from "@/lib/recaps";

interface RecapPageParams {
    slug: string;
}

interface RecapPageProps {
    params: RecapPageParams;
}

export async function generateStaticParams(): Promise<RecapPageParams[]> {
    const slugs = await getSlugs();
    return slugs.map((slug) => ({ slug }));
}

export default async function RecapPage({ params: { slug }}: RecapPageProps) {
    const review = await getRecap(slug);

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
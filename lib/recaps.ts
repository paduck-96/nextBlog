import {readdir, readFile} from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface Recap {
    slug: string;
    title: string;
    date: string;
    image: string;
    body: string;
}

export async function getRecap(slug: string): Promise<Recap> {
    const text = await readFile(`./content/recaps/${slug}.md`, 'utf8');
    const { content, data: { title, date, image } } = matter(text);
    const body = await marked(content);

    return { slug, title, date, image, body };
}

export async function getRecaps(): Promise<Recap[]> {
    const files = await readdir('./content/recaps');
    const slugs = files.filter((file) => file.endsWith('.md'))
        .map((file) => file.slice(0, -'.md'.length));
    const recaps: Recap[] = [];
    for (const slug of slugs) {
        const recap = await getRecap(slug);
        recaps.push(recap);
    }
    return recaps;
}
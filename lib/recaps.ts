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

export async function getFeaturedRecap(): Promise<Recap> {
    const recaps = await getRecaps();
    return recaps[0];
}

export async function getRecap(slug: string): Promise<Recap> {
    const text = await readFile(`./content/recaps/${slug}.md`, 'utf8');
    const { content, data: { title, date, image } } = matter(text);
    const body = await marked(content);

    return { slug, title, date, image, body };
}

export async function getRecaps(): Promise<Recap[]> {
    const slugs = await getSlugs();

    const recaps: Recap[] = [];
    for (const slug of slugs) {
        const recap = await getRecap(slug);
        recaps.push(recap);
    }

    recaps.sort((a, b) => b.date.localeCompare(a.date));

    return recaps;
}

export async function getSlugs(): Promise<string[]> {
    const files = await readdir('./content/recaps');
    return files.filter((file) => file.endsWith('.md'))
        .map((file) => file.slice(0, -'.md'.length));
}
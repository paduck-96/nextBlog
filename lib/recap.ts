import { readFile } from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface Recap {
    title: string;
    date: string;
    image: string;
    body: string;
}

export async function getRecap(slug: string): Promise<Recap> {
    const text = await readFile(`./content/recap/${slug}.md`, 'utf8');
    const { content, data: { title, date, image } } = matter(text);
    const body = await marked(content);
    return { title, date, image, body };
}
import { getCollection } from 'astro:content';
import { Clients, db, Posts } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {

	await db.insert(Clients).values([
		{ name: "GKHG", age: 100, isActive: false },
		{ name: "Gerry", age: 37, isActive: true },
		{ name: "Kabil", age: 10, isActive: true },
		{ name: "Héctor", age: 2, isActive: true },
		{ name: "Greetel", age: 34, isActive: true },
		{ name: "Lesath", age: 3, isActive: false },
	]);

	const posts = await getCollection('blog');

	await db.insert(Posts).values(
		posts.map((p) => ({
			id: p.id,
			title: p.data.title,
			likes: Math.round(Math.random() * 100),
		}))
	);

}

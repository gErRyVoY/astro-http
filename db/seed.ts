import { Clients, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {

	await db.insert(Clients).values([
		{ id: 1, name: "GKHG", age: 100, isActive: false },
		{ id: 2, name: "Gerry", age: 37, isActive: true },
		{ id: 3, name: "Kabil", age: 10, isActive: true },
		{ id: 4, name: "Héctor", age: 2, isActive: true },
		{ id: 5, name: "Greetel", age: 34, isActive: true },
		{ id: 6, name: "Lesath", age: 3, isActive: false },
	]);

	// await Promise.all([
	// 	db.insert(Clients).values({ id: 1, name: "GKHG", age: 100, isActive: false }),
	// ]);
}

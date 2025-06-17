import type { APIRoute } from "astro";


export const GET: APIRoute = async () => {
    const person = {
        name: 'Gerry Voy',
        age: 37,
        email: 'gerardo.omana@humanitas.edu.mx'
    };

    return new Response(JSON.stringify(person), {
        status: 201,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
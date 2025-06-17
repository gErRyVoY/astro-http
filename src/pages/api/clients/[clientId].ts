import type { APIRoute } from 'astro';
// import { db, Clients, eq } from 'astro:db';
import prisma from '@db';


const findClientById = async ( clientId: string ) => {
    try {
        const client = await prisma.client.findUnique({
            where: {
                id: clientId,
            },
        });
        return client;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const GET: APIRoute = async ({ params }) => {
    const { clientId = '' } = params;

    try {
        const client = await findClientById(clientId);
        
        if (!client) {
            return new Response(JSON.stringify({ msg: `Client with id ${clientId} not found.` }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        
        return new Response(JSON.stringify(client), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify(error), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};

export const PATCH: APIRoute = async ({ params, request }) => {
    const { clientId = '' } = params;
    const client = await findClientById(clientId);

    if (!client) {
        return new Response(JSON.stringify({ msg: `Client with id ${clientId} not found.` }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    try {
        const { id, ...body } = await request.json();

        const updatedClient = await prisma.client.update({
            where: {
                id: clientId,
            },
            data: body
        });
        
        return new Response(JSON.stringify(updatedClient), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify(error), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};

export const DELETE: APIRoute = async ({ params, request }) => {
    const { clientId = '' } = params;
    const client = await findClientById(clientId);

    if (!client) {
        return new Response(JSON.stringify({ msg: `Client with id ${clientId} not found.` }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    try {
        // const { id, ...body } = await request.json();
        const { id, ...body } = await request.json();
        console.log(body);

        const deletedClient = await prisma.client.delete({
            where: {
                id: clientId,
            },
        });
        
        return new Response(JSON.stringify({ 
            msg: `Client with id ${clientId} deleted.`,
            client: deletedClient
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify(error), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};


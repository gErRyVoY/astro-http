import { defineAction } from 'astro:actions';
import { db, Posts, eq } from 'astro:db';
import { z } from 'astro:schema';


export const getPostLikes = defineAction({
    input: z.string(),
    handler: async (postId) => {
        const [ post ] = await db.select().from(Posts)
                                .where(eq(Posts.id, postId));
        if ( !post ) {
            return { likes: 0, exists: false };
        }

        return {
            likes: post.likes,
            exists: false,
        };
    },
});
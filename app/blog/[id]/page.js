import getBlogPost from '@/lib/getBlogPost';
import React from 'react';



export default async function SingleBlog({params}){
    
    const id = params.id;
    const post = await getBlogPost(id);

    return (
        <section>
            <h1>{post.title}</h1>
            <div>
                {post.body}
            </div>
        </section>
    );

};
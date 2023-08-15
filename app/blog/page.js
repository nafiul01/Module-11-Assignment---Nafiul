import getAllPosts from '@/lib/getAllPosts';
import React from 'react';
import Link from 'next/link';



export default async function Blog(){
    const posts = await getAllPosts();
    
    return (
        <section>
            <h1>Blog Posts</h1>
            <div>
                {posts.map(post => {
                    return (
                        <p key={post.id}>
                            <Link href={`/blog/${post.id}`}>{post.id}-{post.title}</Link>
                        </p>
                    )
                })}
            </div>
        </section>
    );

};
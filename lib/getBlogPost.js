import React from 'react';


export default async function getBlogPost(id) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if(!res.ok){
        throw new Error ('Error featching post')
    }

    return res.json();
}
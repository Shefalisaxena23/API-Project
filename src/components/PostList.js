import React from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

function PostList() {
    const[posts , setPosts] = useState([]);

   useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
       
        .then(response => setPosts(response.data))
        .catch(error => console.log(error));
    } , []);


  return (
    <div>
    <div className='mt-2 ms-2 text-black-50'>
       All Posts
    </div>

    <ul className='list-group'>
        {posts.map(post => (

            <li className='list-group-item '
            key={post.id}>

          <Link className='text-primary-emphasis'
          to={`/post/${post.id}`}>
            {/* navigate to a new route based on the id  */}
            {post.title}
            
            </Link>
            </li>
        ))}
    </ul>
    </div>
  )
}

export default PostList
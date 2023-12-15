import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
//allows us to access URL parameters within our components

function PostContent() {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { postId } = useParams();

  console.log(postId)

  useEffect(() => {

      axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)

      .then(response => setPost(response.data))
      .catch(error => console.log('Error:', error))

    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)//used backticks

      .then(response => setComments(response.data))
      .catch(error => console.log('Error:', error));
  }, [postId]);
  // re-run when the postId chnges,in simple way the data is re-fetched when the user navigates to a diff. post ..!!!

  return (
    <div className='container mt-4'>
      <h1>{post.title}</h1>

      <h4 className='mt-4 mb-4 text-success'>
        Comments
        </h4>
      <ul className='list-group'>
        {comments.map(comment => (
          <li key={comment.id}>
            <span className='list-group-item'>
              {comment.body}
            </span> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostContent;


// useParams: is used in this component to extract the postId parameter 
// if you want to retrieve route parameters from the functional component rendered by the matching route.
//The React Router useParams hook returns an object whose keys are the parameter names declared in the path string in the Route definition, and the values are the corresponding URL segment from the matching URL.
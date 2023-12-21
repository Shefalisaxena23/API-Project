import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
//allows us to access URL parameters within our components
import NewComment from './NewComment';
import { GoHeart } from "react-icons/go";

function PostContent() {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { postId } = useParams();
  const [commentLikeCount,setCommentLikeCount] = useState(0);

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

  const addComment = (newComment) => {
    //const defaultComment = 'New Comment';
    const updatedComment = {
      ...newComment,
      postId:post.id,
      id:comments.length + 1,
      name:newComment.name || '',
      email:newComment.email || '',
      body: newComment
    };
  
    console.log(newComment);

  console.log('adding', updatedComment)
  
  setComments(
    [updatedComment,
    ...comments]
  );
}

const handleLike = (postId) => {
  setCommentLikeCount((prevLikes) =>({
    ...prevLikes,
    [postId]: (prevLikes[postId] || 0) + 1,
  }));
}


  return (
    <div className='container mt-4'>
      <h1>{post.title}</h1>


      <h4 className='mt-4 mb-4 text-success'>
        Comments
        </h4>
        <NewComment addComment={addComment}/>
      <ul className='list-group'>
        
        {comments.map(comment => (
          <li key={comment.id}>
            <span className='list-group-item'>
              {comment.body}
              {addComment}
              </span> 
              <span> {commentLikeCount[comment.id] || 0} </span>
                <div className='heart-icon'
                     onClick={() => handleLike(comment.id)}>
                  <GoHeart/>
                 </div> 
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
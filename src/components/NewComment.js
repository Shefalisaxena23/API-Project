import React, { useState } from 'react'

function NewComment({addComment}) {
    const[comment, setComment] = useState('');

   const handleChange = (event) => {
      setComment(event.target.value)
    };

    const handleAddComment = () => {
      if (comment !== ''){
        addComment(comment);
        setComment('');
      }
    };

  return (
    <div>
        <h4>Create a new comment</h4>
        <textarea 
           placeholder='Add a new comment'
           value={comment}
           onChange={handleChange}
           rows={3}
        />
        <button onClick={handleAddComment}>Comment</button>
    </div>
  )
  }

export default NewComment
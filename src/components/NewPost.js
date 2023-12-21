import React , {useState} from 'react'

function NewPost({addNewPost}) {
    const [content,setContent] = useState('');

    const handleChange = (event) => {
        setContent(event.target.value)
    };

    const handleSubmit =  (event) => {
        event.preventDefault();
    
    const newPostData = {
        id:Date.now(),
        title: content, // used the content as the title
        content: content
    }

     addNewPost(newPostData); // passed the parent component
     setContent('')

};

  return (
    <div>
        <h4>Create a new Post</h4>
        <form onSubmit={handleSubmit}>
            <textarea placeholder='Create a New Post'
                        value={content}
                        onChange={handleChange}
                        rows={4}
                   />
            <button>Post</button>  
        </form>
    </div>
  )
}

export default NewPost
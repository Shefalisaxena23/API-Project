import React from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { FaGhost,FaSkull,FaFire,FaRocket } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { GoDownload } from "react-icons/go";
import './PostList.css'
import NewPost from './NewPost'


function PostList() {
    const[posts , setPosts] = useState([]);
    const[loading, setLoading] = useState(true);
    const[likeCount , setLikeCount] = useState(0); 

    
   useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
        .catch(error => {
          console.log(error);
          setLoading(false);
        });
      }, []);

      if(loading) {
        return (
        <div className="text-center">
       <div className="spinner-border" role="status">
       </div>
       </div>
        )
      }

      const addNewPost = (newPost) => {
          const defaultContent = 'New Post';
          const updatedPost = {
            ...newPost,
            userId:1,
            id:posts.length + 1,
            title:newPost.title || defaultContent,
            body: newPost.body || '',
          };

        console.log('adding', updatedPost)
        setPosts(
          [updatedPost,
          ...posts]
        );
      }

      console.log('current', posts)

      const handleLike = (postId) => {
        setLikeCount((prevLikes) =>({
          ...prevLikes,
          [postId]: (prevLikes[postId] || 0) + 1,
        }));
      }


  return(
    <div>
     <NewPost addNewPost={addNewPost}  /> 
    <ul className='list-group'>
        {posts.map(post => (
            <li key={post.id} 
                className='list-group-item'>
                  
                   <div className='post-info-grid'>
                    <div className='icon'>{getIcon()}</div>
                    <div className='post-details'>
                    <p className='random-name'>
                       {getNames()}  
                      </p>
                    <p className='day'> &#183;1d</p>

                    <p className='post-content'>
                    <Link className='post-title'
                          to={`/post/${post.id}`}>
                    {/* navigate to a new route based on the id  */}
                    {post.title}
                    </Link>
                    </p>
                    {addNewPost}
             < p className='additional-icons'>
                <div className='comment-icon' ><FaRegComment/></div> 
                <div className='repost-icon'><BiRepost /></div>
                <span> {likeCount[post.id] || 0} </span>
                <div className='heart-icon'
                      onClick={() => handleLike(post.id)}
                       >
                  <GoHeart/>
                 </div> 
                 
                <div className='download-icon'><GoDownload /></div>
                </p>
                </div>
                  </div>   
                  </li>
            ))}
            </ul>
            </div>
  )
        };
         
        const getNames = () => {
          const names = ['onionscorpion','timetraveller19','RhinoSandals','sillywilly','madhushala']
          const selectedNames = names[Math.floor(Math.random() * names.length)]
          return <p className='random-name'>{selectedNames}</p>
        }

        const getIcon = () => {
          const icons=[ FaGhost, FaSkull, FaFire , FaRocket] 
          const randomIcon = Math.floor(Math.random() * icons.length)
          const selectedIcon = icons[randomIcon];
          return React.createElement(selectedIcon)
        }
          

export default PostList
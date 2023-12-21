import React  from 'react';
import {  Route, Routes, Link } from 'react-router-dom';
import PostList from './components/PostList';
import PostContent from './components/PostContent';

function App() {
 
  return (
      <div>
        <nav className= 'navbar bg-body-tertiary'>
        <div className= 'container-fluid'>
        <Link className='navbar-brand' 
        to="/">
          Home
        </Link>
        </div>
        </nav>
       
        <Routes>
          <Route
          path="/post/:postId" 
          element ={<PostContent />} 
           />
         
          <Route 
          path="/"
          element={<PostList/>}
          />
         </Routes>
      </div>
    
  );
}

export default App;

// postId is a placeholder because of the : in front. Placeholder is known as the URL parameter. Because of the URL parameter, React router will not literally match the route above with the URL. It will dynamically match if you point the browser to a URL that matches the /post/:postId pattern in its path.

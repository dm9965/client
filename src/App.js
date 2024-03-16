import './App.css';
import CreatePost from './components/CreatePost';
import Header from './components/Header';
import PostContainer from './components/PostContainer'
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';

function App() {
  const [ postArray, setPostArray ] = useState([]);
  return (
    <div className="w-100 h-100">
      <Header/>
      <CreatePost
        postArray={postArray}
        setPostArray={setPostArray}
      />
      <PostContainer className="h-100 mb-5 "
        postArray={postArray}
      />
    </div>
  );
}

export default App;

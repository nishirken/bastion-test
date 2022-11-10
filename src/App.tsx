import React, { useEffect } from 'react';
import './App.css';
import { Posts } from './Posts/Posts';
import { Comments } from './Comments/Comments';
import { fetchPosts } from './Posts/Posts.thunks';
import { useAppDispatch } from './app/hooks';
import { fetchComments, fetchReplies, fetchTags } from './Comments/Comments.thunks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchComments());
    dispatch(fetchReplies());
    dispatch(fetchTags());
  }, []);

  return (
    <div className="App">
      <Posts />
      <Comments />
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import './App.css';
import { Posts } from './Posts/Posts';
import { Comments } from './Comments/Comments';
import { fetchPosts } from './Posts/Posts.thunks';
import { useAppDispatch } from './app/hooks';
import { fetchComments, fetchReplies, fetchTags } from './Comments/Comments.thunks';
import {testIds} from './App.testIds';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchComments());
    dispatch(fetchReplies());
    dispatch(fetchTags());
  }, []);

  return (
    <div className="App" data-test-id={testIds.post(1)}>
      <Posts />
      <Comments postId={1} />
    </div>
  );
}

export default App;

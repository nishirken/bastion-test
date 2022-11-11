import React, { useEffect } from 'react';
import './App.css';
import { Posts } from './Posts/Posts';
import { Comments } from './Comments/Comments';
import { fetchPosts } from './Posts/Posts.thunks';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { fetchComments, fetchReplies, fetchTags } from './Comments/Comments.thunks';
import { testIds } from './App.testIds';
import { Post, User } from './interfaces';
import { appActionCreators } from './App.actions';
import { appSelectors } from './App.selectors';
import { fetchUser } from './App.thunks';

function App() {
  const dispatch = useAppDispatch();
  const postId = useAppSelector(appSelectors.selectedPostId);
  const user = useAppSelector(appSelectors.user);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchComments());
    dispatch(fetchReplies());
    dispatch(fetchTags());
    dispatch(fetchUser());
  }, []);
  
  const handlePostSelect = (post: Post) => {
    dispatch(appActionCreators.selectPost(post.id));
  };

  return (
    <div className="App" data-test-id={testIds.post(1)}>
      <Posts selectedPostId={postId} onPostSelect={handlePostSelect} />
      {postId && user && <Comments postId={postId} user={user} />}
    </div>
  );
}

export default App;

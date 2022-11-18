import React, { useEffect } from 'react';
import { Posts } from './Posts/Posts';
import { Comments } from './Comments/Comments';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { Post } from './interfaces';
import { appActionCreators } from './App.actions';
import { appSelectors } from './App.selectors';
import { fetchUser } from './App.thunks';
import { ErrorToast } from './ErrorToast/ErrorToast';
import './App.css';

function App() {
  const dispatch = useAppDispatch();
  const postId = useAppSelector(appSelectors.selectedPostId);
  const user = useAppSelector(appSelectors.user);
  const errorMsgs = useAppSelector(appSelectors.errorMsgs);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  
  const handlePostSelect = (post: Post) => {
    dispatch(appActionCreators.selectPost(post.id));
  };

  return (
    <div className="App">
      <Posts selectedPostId={postId} onPostSelect={handlePostSelect} />
      {postId && user && <Comments postId={postId} user={user} />}
      <div className="App__errors">
        {Object.entries(errorMsgs).map(([key, msg]) => (
          <ErrorToast className="App__error" key={key} id={Number(key)} msg={msg} onClose={(id) => dispatch(appActionCreators.closeError(id))} />
        ))}
      </div>
    </div>
  );
}

export default App;

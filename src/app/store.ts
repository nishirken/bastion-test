import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { appReducer } from '../App.reducers';
import { commentsReducer } from '../Comments/Comments.reducers';
import { postsReducer } from '../Posts/Posts.reducers';
// import counterReducer from '../features/counter/counterSlice';
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunkMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

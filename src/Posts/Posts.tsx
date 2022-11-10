import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { postsSelectors } from "./Posts.selectors";
import { fetchPosts } from "./Posts.thunks";

export const Posts = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(postsSelectors.posts);

    return <div>{posts.length}</div>;
};
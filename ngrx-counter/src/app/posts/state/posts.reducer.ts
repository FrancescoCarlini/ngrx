import { Post } from 'src/app/model/post.model';
import { createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { addPost, deletePost, editPost } from "./posts.actions";
import { initialState } from "./posts.state";

export function postsReducer(state: any, action: any) {
    return _postsReducer(state, action);
}

const _postsReducer = createReducer(
    initialState,
    on(addPost, (state, action) => {
        const post = { ...action.post };
        post.id = (state.posts.length + 1).toString();
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(editPost, (state, action) => {
        const UpdatedPosts = state.posts.map(post => {
            return action.post.id === post.id ? action.post : post;
        });
        return {
            ...state,
            posts: UpdatedPosts
        }
    }),
    on(deletePost, (state, action) => {
        const updatedPosts = state.posts.filter(post => {
            return post.id !== action.id;
        })
        return {
            ...state,
            posts: updatedPosts,
        }
    })
);
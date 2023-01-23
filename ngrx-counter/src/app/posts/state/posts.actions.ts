import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/model/post.model";

export const ADD_POST_ACTION = '[post page] add post';
export const UPDATE_POST_ACTION = '[post page] edit post';
export const DELETE_POST_ACTION = '[post page] delete post';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>());
export const editPost = createAction(UPDATE_POST_ACTION, props<{ post: Post }>());
export const deletePost = createAction(DELETE_POST_ACTION, props<{ id: string | undefined }>());
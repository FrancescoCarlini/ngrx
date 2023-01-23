import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post } from 'src/app/model/post.model';
import { PostState } from './posts.state';

const getPostsState = createFeatureSelector<PostState>('posts');

export const getPosts = createSelector(getPostsState, state => {
    return state.posts;
});

export const getPostById = createSelector(getPostsState, (state: any, props: any) => {
    return state.posts.find((post: Post) => post.id === props.id);
})
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post.model';
import { AppState } from 'src/app/state/app.state';
import { deletePost } from '../state/posts.actions';
import { getPosts } from '../state/posts.selector';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private store: Store<AppState>) {
    this.posts$ = this.store.select(getPosts);
  }

  ngOnInit(): void {
  }

  onDeletePost(id: string | undefined): void {
    if (confirm('Are you sure you want to delete this post?')) {
      this.store.dispatch(deletePost({ id: id }));
    }
  }
}

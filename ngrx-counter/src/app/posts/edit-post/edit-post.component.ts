import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/model/post.model';
import { AppState } from 'src/app/state/app.state';
import { editPost } from '../state/posts.actions';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {

  post!: Post;
  postForm!: FormGroup;
  postSubscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router) {
    this.postSubscription = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.store.select(getPostById, { id }).subscribe(data => this.post = data);
      this.createForm();
    })
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

  createForm(): void {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(this.post.description, [Validators.required, Validators.minLength(10)])
    });
  }

  onEditPost(): void {
    if (!this.postForm.valid) {
      return;
    }
    const updatedPost: Post = {
      id: this.post.id,
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    }
    this.store.dispatch(editPost({ post: updatedPost }));
    this.router.navigate(['/posts']);
  }
}

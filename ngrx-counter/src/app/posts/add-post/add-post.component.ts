import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/model/post.model';
import { AppState } from 'src/app/state/app.state';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private store: Store<AppState>) {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
  }

  ngOnInit(): void {
  }

  onAddPost(): void {
    if (!this.postForm.valid) {
      return;
    }
    const newPost: Post = {
      title: this.postForm.get('title')?.value,
      description: this.postForm.get('description')?.value,
    }
    this.store.dispatch(addPost({ post: newPost }));
  }
}

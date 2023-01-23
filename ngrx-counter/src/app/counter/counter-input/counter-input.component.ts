import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { changeText, customIncrement } from '../state/counter.actions';
import { getText } from '../state/counter.selectors';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {

  value!: number;
  text$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.text$ = this.store.select(getText);
  }

  ngOnInit(): void {
  }

  onAdd(): void {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }

  changeText(): void {
    this.store.dispatch(changeText());
  }
}

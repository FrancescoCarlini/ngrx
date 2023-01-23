import { createReducer, on } from '@ngrx/store';
import { changeText, customIncrement, decrement, increment, reset } from './counter.actions';
import { initialState } from './initial.state';

export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}

const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1,
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1,
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0,
        }
    }),
    on(customIncrement, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.value,
        }
    }),
    on(changeText, (state, action) => {
        return {
            ...state,
            text: 'Progetto fatto con NGRX',
        }
    })
);
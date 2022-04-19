import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.states';
import * as fromReducer from './coffee.reducer';

export const reducers: ActionReducerMap<AppState> = {
  coffeeState: fromReducer.coffeeReducer
};
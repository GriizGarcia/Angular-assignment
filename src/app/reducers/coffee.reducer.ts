import { createFeatureSelector, createSelector, createReducer, on, Action } from '@ngrx/store';
import * as fromActions from '../actions/coffee.actions';
import { CoffeeState } from './app.states';

export const initialState: CoffeeState = {coffees: [], message: ''};

// Creating reducer
const _coffeeReducer = createReducer(
  initialState,
  on(fromActions.ShowAllSuccessAction, (state, {payload}) => ({coffees: payload, message: 'Success'})),
  //on(fromActions.ResetAction, (state) => ({ coffees: [], message: ''}))
);

export function coffeeReducer(state: any, action: Action) {
  return _coffeeReducer(state, action);
}

// Creating selectors
export const getCoffeeState = createFeatureSelector<CoffeeState>('coffeeState');

export const getCoffees = createSelector(
    getCoffeeState,
      (state: CoffeeState) => state.coffees
);

export const getMessage = createSelector(
  getCoffeeState, 
  (state: CoffeeState) => state.message
); 
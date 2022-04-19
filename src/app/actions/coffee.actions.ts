import { createAction, props } from '@ngrx/store';
import { Coffee } from '../models/coffee.model';

export const ShowAllAction = createAction('Show All');
export const ShowAllSuccessAction = createAction('Show All Success', props<{ payload: Coffee[]}>());
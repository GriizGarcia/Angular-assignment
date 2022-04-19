import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap } from 'rxjs/operators';
import * as fromActions from '../actions/coffee.actions';
import { CoffeeService } from '../services/coffee.service';

@Injectable()
export class CoffeeEffects {

  constructor(
    private actions$: Actions,
    private coffeeService: CoffeeService,
  ) { }

  loadAllCoffees$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.ShowAllAction),
    mergeMap(() =>
      this.coffeeService.getAllCoffees(50).pipe(  
        map(data => fromActions.ShowAllSuccessAction({payload: data}))
      )
    )
  ));
} 
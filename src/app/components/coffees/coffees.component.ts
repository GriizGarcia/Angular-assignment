import { Component, OnInit, ViewChild} from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromReducer from '../../reducers/coffee.reducer';
import * as fromActions from '../../actions/coffee.actions';
import { Coffee } from '../../models/coffee.model';
import { Observable } from 'rxjs';
import { CoffeeState } from '../../reducers/app.states';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { SharedDetailsService } from 'src/app/services/shared-details.service';

@Component({
  selector: 'app-coffees-list',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit{
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  //coffees$: Observable<Coffee[]>;
	message$: Observable<any>;
  displayedColumns: String[] = ['blend_name', 'origin', 'variety', 'actions'];
  coffeeDataSource : MatTableDataSource<Coffee>;
  coffeesList: Coffee[];
  currentCoffee: Coffee;
  isLoading: Boolean;

  constructor(
    private store: Store<CoffeeState>,
    private router: Router,
    private sharedDeatilsService: SharedDetailsService
  ) {
    this.isLoading = true; 
    this.coffeesList = [];
    this.currentCoffee = this.coffeesList[0];
    this.coffeeDataSource = new MatTableDataSource<Coffee>([]);
    //this.coffees$ = store.select(fromReducer.getCoffees);
		this.message$ = store.select(fromReducer.getMessage);
    store.select(fromReducer.getCoffees).subscribe( res => {
      return this.coffeesList = res;
    });
  }

  ngOnInit(): void {
    this.loadAllCoffees();
    setTimeout(() => {
      this.coffeeDataSource.data = this.coffeesList;
      this.isLoading = false;
    }, 400);
    
  }

  loadAllCoffees(){
		this.store.dispatch(fromActions.ShowAllAction());
    this.coffeeDataSource.paginator = this.paginator;
	}

  getCoffeeDetails(coffee: Coffee){
    this.sharedDeatilsService.setDetails(coffee);
    this.router.navigate(['details']);
  }
}

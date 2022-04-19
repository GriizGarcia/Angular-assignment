import { Coffee } from '../models/coffee.model';

export interface AppState {
	coffeeState: CoffeeState;
}

export interface CoffeeState {
	coffees: Coffee[];
	message: any;
} 
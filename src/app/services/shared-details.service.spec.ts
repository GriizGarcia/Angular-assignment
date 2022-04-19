import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Coffee } from '../models/coffee.model';

import { SharedDetailsService } from './shared-details.service';

describe('SharedDetailsService', () => {
  let service: SharedDetailsService;
  let controller: HttpTestingController;
  let coffee: Coffee = { 
    blend_name: 'Kreb-Full-o Blend', 
    origin: 'Antigua, Guatemala', 
    variety: 'Ennarea', 
    notes: 'faint, tea-like, honey, black cherry, vanilla', 
    intensifier: '' };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be set coffee details', () => {
    service.setDetails(coffee);
    let actualCoffeeDetails = service.getDetails();
    expect(actualCoffeeDetails).toEqual(coffee);
  });

  /*it('should be return a coffee details', () => {
    service.setDetails(coffee);
    let actualCoffee = service.getDetails();
    expect(actualCoffee).toEqual(coffee);
  });*/
});

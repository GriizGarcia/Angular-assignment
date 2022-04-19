import { CoffeeService } from './coffee.service';
import { Coffee } from '../models/coffee.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';


describe('CoffeeService', () => {
  let service: CoffeeService;
  let controller: HttpTestingController;
  const expectedUrl = 'https://random-data-api.com/api/coffee/random_coffee?size=1';
  const coffee: Coffee = { blend_name: 'Kreb-Full-o Blend', origin: 'Antigua, Guatemala', variety: 'Ennarea', notes: 'faint, tea-like, honey, black cherry, vanilla', intensifier: '' };
  const coffees : Coffee[] = [ coffee ];

 beforeEach(() => {
   TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [CoffeeService],
    });
    service = TestBed.inject(CoffeeService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return coffee list of one product', () =>{
    let actualCoffees: Coffee[] | undefined;
    service.getAllCoffees(1).subscribe(
      (otherCoffees) => {
        actualCoffees = otherCoffees;
      }
    );

    const request = controller.expectOne(expectedUrl);
    request.flush(coffees);
    controller.verify();
    expect(actualCoffees?.length).toBe(1);
  });
});

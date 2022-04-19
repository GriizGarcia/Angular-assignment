import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Coffee } from 'src/app/models/coffee.model';
import { SharedDetailsService } from 'src/app/services/shared-details.service';
describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let sharedDetailsService: SharedDetailsService;
  const coffee: Coffee = { 
    blend_name: 'Kreb-Full-o Blend', 
    origin: 'Antigua, Guatemala', 
    variety: 'Ennarea', 
    notes: 'faint, tea-like, honey, black cherry, vanilla', 
    intensifier: '' };

  beforeEach(async () => await TestBed.configureTestingModule({
    declarations: [
      DetailsComponent
    ],
    imports: [
      RouterTestingModule.withRoutes([{path: 'details', component: DetailsComponent}])
    ]
  }).compileComponents());

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    component.coffee = coffee;
    fixture.detectChanges();
  });

  it('should load data', async(() => {
    component.loadData();
    fixture.whenStable().then( () => {
        fixture.detectChanges();
        expect(component.coffee).toEqual(coffee);
    });
 }));

  it('should create DetailsComponent', () => {
    expect(component).toBeTruthy();
  });
});

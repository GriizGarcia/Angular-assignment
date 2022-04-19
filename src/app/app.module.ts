import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { CoffeesComponent } from './components/coffees/coffees.component';
import { CoffeeService } from './services/coffee.service';
import { reducers } from './reducers/reducers';
import { CoffeeEffects } from './effects/coffee.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { DetailsComponent } from './components/details/details.component';
import { SharedDetailsService } from './services/shared-details.service';


@NgModule({
  declarations: [
    AppComponent,
    CoffeesComponent,
    DetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CoffeeEffects]),
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [CoffeeService, SharedDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

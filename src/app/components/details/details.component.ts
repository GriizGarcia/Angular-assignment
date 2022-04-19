import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coffee } from 'src/app/models/coffee.model';
import { SharedDetailsService } from 'src/app/services/shared-details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  coffee! : Coffee;
  constructor(
    private sharedDetailsService: SharedDetailsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.coffee = this.sharedDetailsService.getDetails();
    /*if(this.coffee == null){
      this.router.navigate(['coffees']);
    }*/
  }
}

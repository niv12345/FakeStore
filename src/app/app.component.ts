import { Component, SimpleChanges } from '@angular/core';
import { FakestoreAPIService } from './service/fakestore-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FakeStore';
  productList:any;

  constructor(public fakestoreAPIService:FakestoreAPIService){
    
  }
 
}

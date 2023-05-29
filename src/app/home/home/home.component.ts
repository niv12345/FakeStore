import { Component, SimpleChanges } from '@angular/core';
import { FakestoreAPIService } from 'src/app/service/fakestore-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'FakeStore';
  productList:any;
  constructor(public fakestoreAPIService:FakestoreAPIService){
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    /// this.getProductList();
     console.log("NGONCHANGE")
     
   }
   ngOnInit(): void {
     this.getProductList();
     
   }
   getProductList(){
     this.fakestoreAPIService.getProducts().subscribe(res=>{
       this.productList = res;
      console.log(res);
     })
   }
}

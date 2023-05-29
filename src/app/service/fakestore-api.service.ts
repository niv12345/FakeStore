import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakestoreAPIService {

  constructor(public http:HttpClient) { }

  getProducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}
  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
    console.log("REQ ",req)
    
    return next.handle(req)
  }

}

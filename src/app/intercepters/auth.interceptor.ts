import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.method);
    const token = localStorage.getItem('token');
    if(token){
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      });
    }else{
      this.router.navigate(['login']);
    }
    return next.handle(request);
  }
}

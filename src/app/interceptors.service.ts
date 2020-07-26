import { Injectable } from '@angular/core';
import {
     HttpInterceptor,
     HttpRequest,
     HttpResponse,
     HttpHandler,
     HttpEvent,
     HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
const TOKEN_KEY = 'token';

@Injectable()
export class InterceptorsService implements HttpInterceptor {

     constructor(private router: Router) { }
     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          const token: string = localStorage.getItem(TOKEN_KEY);
          if (token) {
               request = request.clone({ headers: request.headers.set('x-access-token', token) });
          }
          if (!request.headers.has('Content-Type')) {
               request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
          }
          request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
          console.log("Interceptor")
          return next.handle(request).pipe(
               catchError((err: HttpErrorResponse) => {

                    if (err.status === 401) {
                         this.router.navigateByUrl('/login');
                    }

                    return throwError(err);

               })
          );
     }
}

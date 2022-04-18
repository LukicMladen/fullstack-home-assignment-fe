import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class DefaultHttpInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 404) {
          this.router.navigate(['404']);
        }
        return EMPTY;
      })
    );
  }
}

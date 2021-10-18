import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

 
  constructor(
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    const token: string| null = localStorage.getItem('token');

    let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          Swal.fire({
            title: 'Credenciales invalidas o Token Expirado',
            icon: 'info',
            confirmButtonText: 'Aceptar'
          })
          this.router.navigateByUrl('/login');
        }

        return throwError( err );

      })
    );
  }

}

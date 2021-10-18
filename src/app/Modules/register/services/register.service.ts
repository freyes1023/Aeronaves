import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoint } from '@core/shared/endPoins';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient) { 
  }

 
  register(dataRegister:any): Observable<any> {
    return this.http.post(endpoint.Register,dataRegister).pipe(
      map((data:any) => {
        const DataUser: any = data;   
        localStorage.setItem('User', JSON.stringify(DataUser.user));
        localStorage.setItem('token', JSON.stringify(DataUser.accessToken));
        return DataUser;
    }),
      catchError((err:HttpErrorResponse ) => {
        if ((err.error as string).includes('Email already exists')) {
          Swal.fire({
          title: 'La cuenta ya existe!',
          icon: 'info',
          confirmButtonText: 'Aceptar'
        })
        }
        
        return throwError(err);    //Rethrow it back to component
      })
    )
  }
}


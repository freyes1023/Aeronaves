import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoint } from '@core/shared/endPoins';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { dataLogin } from '../models/dataLogin.model';
import { responseLogin } from '../models/responseLogin.model';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { 

  }

  Login(dataLogin:dataLogin): Observable<responseLogin> {
    return this.http.post(endpoint.Login,dataLogin).pipe(
      map((data:any) => {
        const DataUser: responseLogin = data;   
        localStorage.setItem('User', JSON.stringify(DataUser.user));
        localStorage.setItem('token', DataUser.accessToken );
        return DataUser;
    }),
      catchError((err) => {
        Swal.fire({
          title: 'Usuario o Contraseña Incorrecta!',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
        return throwError(err);    //Rethrow it back to component
      })
    )
  }
}

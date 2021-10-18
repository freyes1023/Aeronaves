import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoint } from '@core/shared/endPoins';
import { User } from '@interfaces/User.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Alquiler } from '../models/alquiler.model';
import { AlquilerUser } from '../models/AlquilerUser.model';
import { Destino } from '../models/destinos.model';
import { Naves } from '../models/naves.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService  {

  constructor(private http : HttpClient) { }
 
  GetDestinos(): Observable<Destino[]>{
    const UrlDestinos = endpoint.Destinos
    return this.httpGet(UrlDestinos);
  }
  GetAeronaves(): Observable<Naves[]>{
    const UrlAeronaves = endpoint.Aeronaves
    return this.httpGet(UrlAeronaves);
  }
  GetAeronave(id:string): Observable<Naves>{
    const UrlAeronave = endpoint.Aeronaves + '/' + id;
    return this.httpGet(UrlAeronave);
  }
  GetUsers(): Observable<User[]>{
    const UrlUsers = endpoint.Users
    return this.httpGet(UrlUsers);
  }
  GetAlquiler(id:number): Observable<Alquiler>{
    const UrlUsers = endpoint.Alquiler + '/' + id;
    return this.httpGet(UrlUsers);
  }
  GetUserAlquiler(idUser:number): Observable<AlquilerUser[]>{
    const UrlUsers = endpoint.AlquilerUser+`?idUser=${idUser}`
    return this.httpGet(UrlUsers);
  }

  alquilar(dataAlquiler:any): Observable<any> {
    return this.http.post(endpoint.Alquiler,dataAlquiler).pipe(
      map((data:any) => {;
        return data;
    }),
      catchError((err) => {
        return throwError(err);    //Rethrow it back to component
      })
    )
  }
  setAlquilerUser(dataAlquiler:any): Observable<any> {
    return this.http.post(endpoint.AlquilerUser,dataAlquiler).pipe(
      map((data:any) => {;
        return data;
    }),
      catchError((err) => {
        return throwError(err);    //Rethrow it back to component
      })
    )
  }
  private httpGet(url:string): Observable<any> {
      return this.http.get(url).pipe(
        map((data:any) => {
          return data;
      }),
        catchError((err) => {
          return throwError(err);    //Rethrow it back to component
        })
      )
    }
  
}

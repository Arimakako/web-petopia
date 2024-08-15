import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Service } from './Services';
import { catchError, map, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceClientService {
  constructor(private _http: HttpClient) { }

  // get all product
  getServices(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/services", requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Service>),
      retry(3),
      catchError(this.handleError))
  }
   // get service by id
   getService(serviceId: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/services/" + serviceId, requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Service>),
      retry(3),
      catchError(this.handleError))
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }
}

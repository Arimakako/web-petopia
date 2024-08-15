
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Combo } from './combo';
@Injectable({
  providedIn: 'root'
})
export class ComboClientService {
  constructor(private _http: HttpClient) { }

  // get all combo
  getCombos(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/combos", requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Combo>),
      retry(3),
      catchError(this.handleError))
  }

  // get combo by id
  getCombo(comboId: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/combos/" + comboId, requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Combo>),
      retry(3),
      catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }
}
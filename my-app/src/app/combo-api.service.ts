
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Combo } from './combo'

@Injectable({
  providedIn: 'root'
})
export class ComboAPIService {

  constructor(private _http: HttpClient) { }
getCombos():Observable<any>
{
const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf- 8")
const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.get<any>("/combos",requestOptions).pipe(
map(res=>JSON.parse(res) as Array<Combo>),
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

  // post new combo
  postCombo(acombo: Combo): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.post<any>("/combos/", JSON.stringify(acombo), requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Combo>),
      retry(3),
      catchError(this.handleError))
  }

  // put combo
  putCombo(comboId: string,acombo: Combo): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http
    .put<any>(`/combos/${comboId}`, acombo, requestOptions)  
    .pipe(
      map((res) => res as Combo),  
      catchError(this.handleError)
    );
  }
  
  // delete combo
  deleteCombo(comboId: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.delete<any>("/combos/" + comboId, requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Combo>),
      retry(3),
      catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }

  

}
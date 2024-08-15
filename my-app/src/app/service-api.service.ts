import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Service } from './Services';

@Injectable({
  providedIn: 'root',
})
export class ServiceAPIService {
  constructor(private _http: HttpClient) {}
  getServices(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf- 8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/services', requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Service>),
      retry(3),
      catchError(this.handleError)
    );
  }

  // get service by id
  getService(serviceId: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/services/' + serviceId, requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<Service>),
      retry(3),
      catchError(this.handleError)
    );
  }

  // post new service
  postService(aservice: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type','application/json;charset=utf-8');
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .post<any>('/services', JSON.stringify(aservice), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<Service>),
        retry(3),
        catchError(this.handleError)
      );
  }

  // put service
  putService(serviceId: string, aservice: Service): Observable<any> {
    // Tạo một bản sao của sản phẩm để sửa đổi
  const headers = new HttpHeaders().set(
    'Content-Type',
    'application/json;charset=utf-8'
  );
  const requestOptions: Object = {
    headers: headers,
    responseType: 'text',  // Sửa đổi ở đây để nhận dạng JSON thay vì text
  };
  return this._http
    .put<any>(`/services/${serviceId}`, aservice, requestOptions)  
    .pipe(
      map((res) => res as Service),  
      catchError(this.handleError)
    );
}

  // delete service
  deleteService(serviceId: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.delete<any>("/services/" + serviceId, requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Service>),

      retry(3),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}

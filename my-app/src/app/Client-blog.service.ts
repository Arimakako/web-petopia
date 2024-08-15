import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Blog } from './Blogs';
@Injectable({
  providedIn: 'root'
})
export class ClientBlogService {
  constructor(private _http: HttpClient) { }

  getBlogs(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/blogs", requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Blog>),
      retry(3),
      catchError(this.handleError))
  }

  getBlog(blogId: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/blogs/" + blogId, requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Blog>),
      retry(3),
      catchError(this.handleError))
  }

  getBlogsByCate(cate: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")

    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }

    return this._http.get<any>("/blogs/cate/" + cate, requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Blog>),
      retry(3),
      catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }
}
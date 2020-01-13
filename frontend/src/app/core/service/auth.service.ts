import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { User } from '../../data/schema/user';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    return this.http.post('http://localhost:5300/login', data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  logout(): Observable<boolean> {
    return of(false);
  }

  getToken() {
    return this.getToken;
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, first, Observable, throwError} from 'rxjs';
import {Tantargy} from '../models/Tantargy';

@Injectable({
  providedIn: 'root'
})
export class TantargyService {

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private http: HttpClient) {
  }

  getTantargy(): Observable<Tantargy[]> {
    return this.http.get<Tantargy[]>('/api/tantargy', {responseType: 'json'}).pipe(
      catchError(this.ErrorHandler)
    );
  }

  // tslint:disable-next-line:ban-types
  addTantargy(formData: Partial<Tantargy>): Observable<Tantargy> {

    return this.http.post<Tantargy>('/api/tantargy', {targyKod: formData.targyKod, nev: formData.nev}, this.httpOptions).pipe(
      first(),

      catchError(this.ErrorHandler)
    );
  }

  // @ts-ignore
  delTantargy(targykod: string): Observable<{}> {

    return this.http.delete<Tantargy>('/api/tantargy/' + targykod, this.httpOptions).pipe(
      catchError(this.ErrorHandler)
    );
  }


  private ErrorHandler(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

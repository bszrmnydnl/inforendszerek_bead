import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, first, Observable, throwError} from 'rxjs';
import {Oktato} from '../models/Oktato';

@Injectable({
  providedIn: 'root'
})
export class OktatoService {

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private http: HttpClient) {
  }

  getOktato(): Observable<Oktato[]> {
    return this.http.get<Oktato[]>('/api/oktato', {responseType: 'json'}).pipe(
      catchError(this.ErrorHandler)
    );
  }

  // tslint:disable-next-line:ban-types
  addOktato(formData: Partial<Oktato>): Observable<Oktato> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<Oktato>('/api/oktato', {neptunKod: formData.neptunKod, nev: formData.nev, tanszek: formData.tanszek}, this.httpOptions).pipe(
      first(),

      catchError(this.ErrorHandler)
    );
  }

  // @ts-ignore
  delOktato(neptunKod: string): Observable<{}> {
    return this.http.delete<Oktato>('/api/oktato/' + neptunKod, this.httpOptions).pipe(
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

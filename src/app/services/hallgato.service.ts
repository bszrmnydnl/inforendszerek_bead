import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, first, Observable, throwError} from 'rxjs';
import {Hallgato} from '../models/Hallgato';

@Injectable({
  providedIn: 'root'
})
export class HallgatoService {

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private http: HttpClient) {
  }

  getHallgato(): Observable<Hallgato[]> {
    return this.http.get<Hallgato[]>('/api/hallgato', {responseType: 'json'}).pipe(
      catchError(this.ErrorHandler)
    );
  }

  addHallgato(formData: Partial<Hallgato>): Observable<Hallgato> {

    // tslint:disable-next-line:max-line-length
    return this.http.post<Hallgato>('/api/hallgato', { neptunKod: formData.neptunKod, nev: formData.nev, tankor: formData.tankor}, this.httpOptions).pipe(
      first(),
      catchError(this.ErrorHandler)
    );
  }

  delHallgato(neptunKod: string): Observable<{}> {
    return this.http.delete<Hallgato>('/api/hallgato/' + neptunKod, this.httpOptions).pipe(
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

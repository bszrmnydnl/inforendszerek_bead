import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, first, Observable, throwError} from 'rxjs';
import {Kurzus} from '../models/Kurzus';

@Injectable({
  providedIn: 'root'
})
export class KurzusService {

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private http: HttpClient) {
  }

  getKurzus(): Observable<Kurzus[]> {
    return this.http.get<Kurzus[]>('/api/kurzus', {responseType: 'json'}).pipe(
      catchError(this.ErrorHandler)
    );
  }

  // tslint:disable-next-line:ban-types
  addKurzus(formData: Partial<Kurzus>): Observable<Kurzus> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<Kurzus>('/api/kurzus', {kurzusKod: formData.kurzusKod, nev: formData.nev, tantargy: formData.tantargy}, this.httpOptions).pipe(
      first(),
      catchError(this.ErrorHandler)
    );
  }

  // @ts-ignore
  delKurzus(kurzusKod: string): Observable<{}> {
    return this.http.delete<Kurzus>('/api/kurzus/' + kurzusKod, this.httpOptions).pipe(
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

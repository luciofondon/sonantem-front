import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Order } from '../models/order.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class PayService {

  private readonly API_COUNTRY_URI = environment.apiUrl + '/api/pay';
  
  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getAllCountries(): Observable<Order[]> {
    return this.http.get<Order[]>(this.API_COUNTRY_URI)
      .pipe(
        tap(heroes => console.log('fetched hotels')),
        catchError(this.handleError('getHotels', []))
      );
  }
  
}
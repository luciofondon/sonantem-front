import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Item } from 'src/app/shared/models/item.model';
import { Product } from '../models/product.model';

@Injectable()
export class ShopService {
  public productList: Product[] = [];

  private readonly API_COUNTRY_URI = environment.apiUrl + '/api/country';
  
  constructor() { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
/*
  searchItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.API_COUNTRY_URI)
      .pipe(
        tap(heroes => console.log('fetched hotels')),
        catchError(this.handleError('getHotels', []))
      );
  }*/

  loadProducts(): Product[] {
    var products= [
      {
        image: ["https://images-na.ssl-images-amazon.com/images/I/513e63mGjzL._SL1200_.jpg"],
        priceAmazon: 12.4,
        price: 12.2,
        description: "Descripcion",
        title: "Titulo1"
      },
      {
        image: ["https://images-na.ssl-images-amazon.com/images/I/51p5D8riVkL._SL1000_.jpg"],
        priceAmazon: 12.4,
        price: 12.2,
        description: "Descripcion",
        title: "Titulo2"
      },
      {
        image: ["https://images-na.ssl-images-amazon.com/images/I/513e63mGjzL._SL1200_.jpg"],
        priceAmazon: 12.4,
        price: 12.2,
        description: "Descripcion",
        title: "Titulo3"
      }
    ];

    this.productList = products;
    return this.productList;
  
  } 

}
  

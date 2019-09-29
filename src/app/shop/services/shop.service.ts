import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, timeout, tap, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Item } from 'src/app/shared/models/item.model';
import { Product } from '../models/product.model';
//import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ShopService {
  public productList: Product[] = [];
  public productListSelected: Product[] = [];

  private readonly API_DATA_URI = environment.apiUrl + '/api/data';
  
  constructor(private http: HttpClient) { 
    var product = {
      asin: "XXXXX",
      images: ["https://images-na.ssl-images-amazon.com/images/I/513e63mGjzL._SL1200_.jpg"],
      priceAmazon: 12.4,
      price: 12.2,
      description: "Descripcion",
      title: "Titulo1"
  };

  this.productListSelected.push(product);



  }

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
        asin: "XXXXX",
        images: ["https://images-na.ssl-images-amazon.com/images/I/513e63mGjzL._SL1200_.jpg"],
        priceAmazon: 12.4,
        price: 12.2,
        description: "Descripcion",
        title: "Titulo1"
      },
      {
        asin: "XXXXX",
        images: ["https://images-na.ssl-images-amazon.com/images/I/51p5D8riVkL._SL1000_.jpg"],
        priceAmazon: 12.4,
        price: 12.2,
        description: "Descripcion",
        title: "Titulo2"
      },
      {
        asin: "XXXXX",
        images: ["https://images-na.ssl-images-amazon.com/images/I/513e63mGjzL._SL1200_.jpg"],
        priceAmazon: 12.4,
        price: 12.2,
        description: "Descripcion",
        title: "Titulo3"
      }
    ];

    this.productList = products;
    return this.productList;
  
  } 

  getProduct(): Product {
    return (
      {
        asin: "XXXXX",
        images: ["https://images-na.ssl-images-amazon.com/images/I/513e63mGjzL._SL1200_.jpg"],
        priceAmazon: 12.4,
        price: 12.2,
        description: "Descripcion",
        title: "Titulo1"
      })
  
  }

  addToCart(product: Product): void{
    this.productListSelected.push(product);
  }

  getProductsCart (): Product[] {
    return this.productListSelected;
  }

  deleteProduct(product: Product){

  }

  getProducts (q: string): Observable<Product[]> {
    const url = `${this.API_DATA_URI}/${q}`;

    return this.http.get<Product[]>(url)
      .pipe(
        
        tap(heroes => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }

}
  

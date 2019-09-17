import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';
 
@Pipe({
  name: 'totalCart'
})
export class TotalCartPipe implements PipeTransform {
 
  transform(productList: Product[]): Number {
    let total = 0;
    productList.forEach((item: Product)=>{
      total += item.price;
    })
    return total;
  }
 
}
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'cart',
  templateUrl: '../resources/cart.component.html',
  styleUrls: ['../resources/styles/cart.component.scss']
})
export class CartComponent implements OnInit {

  public productList : Product[] = [];
  
  constructor(private shopService: ShopService) {
  
  }
  ngOnInit() {
    this.productList = this.shopService.getProductsCart();
  }


  
  
}
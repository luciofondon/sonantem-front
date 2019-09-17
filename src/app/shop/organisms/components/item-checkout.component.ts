  
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../models/product.model';

@Component({
    selector: '[item-checkout]',
    templateUrl: '../resources/item-checkout.component.html',
    styleUrls: ['../resources/styles/item-checkout.component.scss']
})
export class ItemCheckoutComponent implements OnInit {
    public productList : Product[] = [];

    constructor(private router: Router, private formBuilder: FormBuilder, private shopService: ShopService) { }
  
    ngOnInit() {
        this.productList = this.shopService.getProductsCart();
    }

}
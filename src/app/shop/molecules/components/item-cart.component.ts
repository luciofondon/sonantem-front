  
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Product } from '../../models/product.model';
import { ShopService } from '../../services/shop.service';

@Component({
    selector: 'item-cart',
    templateUrl: '../resources/item-cart.component.html',
    styleUrls: ['../resources/styles/item-cart.component.scss']
})
export class ItemCartComponent implements OnInit {
    @Input() product : Product;

   
    constructor(private router: Router, private formBuilder: FormBuilder, private shopService: ShopService) { }
  

  
    ngOnInit() {
    
    }

    add(){
        this.router.navigate(['login']);
    }


    deleteProduct(){
        this.shopService.deleteProduct(this.product);
    }
  
  
    
}
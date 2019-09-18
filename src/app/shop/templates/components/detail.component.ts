  
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Product } from '../../models/product.model';
import { ShopService } from '../../services/shop.service';

@Component({
    selector: 'detail',
    templateUrl: '../resources/detail.component.html',
    styleUrls: ['../resources/styles/detail.component.scss']
})
export class DetailComponent implements OnInit {

    public product : Product;
    //public quantity: number = 0;

    public productForm : FormGroup;

    constructor(private router: Router, private formBuilder: FormBuilder, private shopService: ShopService) { }
  

  
    ngOnInit() {

   
        this.productForm = this.formBuilder.group({
            'quantity' : [null, Validators.required]
        });
        this.product = this.shopService.getProduct();

        
    }

    addProduct(){
        this.router.navigate(['login']);
    }

    add(){
      //  this.quantity--;
    }

    subtract(){
       // this.quantity++;
    }

    onSubmit(form : NgForm){

    }

    addToCart(){
        var product = {
            asin: "XXXXX",
            images: ["https://images-na.ssl-images-amazon.com/images/I/513e63mGjzL._SL1200_.jpg"],
            priceAmazon: 12.4,
            price: 12.2,
            description: "Descripcion",
            title: "Titulo1"
          };

        this.shopService.addToCart(product);
    }
  
    
}
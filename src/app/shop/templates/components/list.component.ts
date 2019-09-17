  
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Product } from '../../models/product.model';
import { ShopService } from '../../services/shop.service';

@Component({
    selector: 'list',
    templateUrl: '../resources/list.component.html',
    styleUrls: ['../resources/styles/list.component.scss']
})
export class ListComponent implements OnInit {
    public productList: Product[] = [];


    constructor(private router: Router, private formBuilder: FormBuilder, private shopService: ShopService) { }
  
    ngOnInit() {
        this.productList = this.shopService.loadProducts();
    }
  
}
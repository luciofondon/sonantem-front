  
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Product } from '../../models/product.model';

@Component({
    selector: 'item-list',
    templateUrl: '../resources/item-list.component.html',
    styleUrls: ['../resources/styles/item-list.component.scss']
})
export class ItemListComponent implements OnInit {

    @Input() product : Product;

    constructor(private router: Router, private formBuilder: FormBuilder) { }
  

  
    ngOnInit() {
    
    }

  
}
  
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Product } from '../../models/product.model';

@Component({
    selector: 'item-grid',
    templateUrl: '../resources/item-grid.component.html',
    styleUrls: ['../resources/styles/item-grid.component.scss']
})
export class ItemGridComponent implements OnInit {

    @Input() product:Product;

    constructor(private router: Router, private formBuilder: FormBuilder) { }
  

  
    ngOnInit() {
    }

    detail(){
        this.router.navigate(['detail', '1']);
    }
  
    
}
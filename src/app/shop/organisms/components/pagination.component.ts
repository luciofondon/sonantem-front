  
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Product } from '../../models/product.model';

@Component({
    selector: 'pagination',
    templateUrl: '../resources/pagination.component.html',
    styleUrls: ['../resources/styles/pagination.component.scss']
})
export class PaginationComponent implements OnInit {


    constructor(private router: Router, private formBuilder: FormBuilder) { }
  

  
    ngOnInit() {
    }

   
}
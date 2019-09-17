  
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Product } from '../../models/product.model';

@Component({
    selector: 'detail',
    templateUrl: '../resources/detail.component.html',
    styleUrls: ['../resources/styles/detail.component.scss']
})
export class DetailComponent implements OnInit {

    @Input() product:Product;

    constructor(private router: Router, private formBuilder: FormBuilder) { }
  

  
    ngOnInit() {
    
    }

    add(){
        this.router.navigate(['login']);
    }
  
    
}
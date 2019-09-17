  
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'item-cart',
    templateUrl: '../resources/item-cart.component.html',
    styleUrls: ['../resources/styles/item-cart.component.scss']
})
export class ItemCartComponent implements OnInit {

   
    constructor(private router: Router, private formBuilder: FormBuilder) { }
  

  
    ngOnInit() {
    
    }

    add(){
        this.router.navigate(['login']);
    }
  
    
}
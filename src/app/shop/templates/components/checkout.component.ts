  
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'checkout',
    templateUrl: '../resources/checkout.component.html',
    styleUrls: ['../resources/styles/checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

   
    constructor(private router: Router, private formBuilder: FormBuilder) { }
  

  
    ngOnInit() {
    
    }

    find(){
        this.router.navigate(['list']);
    }
  
    
}
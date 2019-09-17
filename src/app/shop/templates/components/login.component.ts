  
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: '../resources/login.component.html',
    styleUrls: ['../resources/styles/login.component.scss']
})
export class LoginComponent implements OnInit {

   
    constructor(private router: Router) { }
  

  
    ngOnInit() {
    
    }
  
    
}
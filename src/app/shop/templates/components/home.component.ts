  
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'home',
    templateUrl: '../resources/home.component.html',
    styleUrls: ['../resources/styles/home.component.scss']
})
export class HomeComponent implements OnInit {

   
    constructor(private router: Router, private formBuilder: FormBuilder) { }
  

  
    ngOnInit() {
    
    }

    find(){
        this.router.navigate(['list']);
    }
  
    
}
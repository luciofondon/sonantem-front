  
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'about',
    templateUrl: '../resources/about.component.html',
    styleUrls: ['../resources/styles/about.component.scss']
})
export class AboutComponent implements OnInit {

   
    constructor(private router: Router, private formBuilder: FormBuilder) { }
  

  
    ngOnInit() {
    
    }

    find(){
        this.router.navigate(['list']);
    }
  
    
}
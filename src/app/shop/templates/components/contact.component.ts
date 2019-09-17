  
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'contact',
    templateUrl: '../resources/contact.component.html',
    styleUrls: ['../resources/styles/contact.component.scss']
})
export class ContactComponent implements OnInit {

   
    constructor(private router: Router, private formBuilder: FormBuilder) { }
  

  
    ngOnInit() {
    
    }

    find(){
        this.router.navigate(['list']);
    }
  
    
}
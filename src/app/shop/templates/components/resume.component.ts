  
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'resume',
    templateUrl: '../resources/resume.component.html',
    styleUrls: ['../resources/styles/resume.component.scss']
})
export class ResumeComponent implements OnInit {

   
    constructor(private router: Router, private formBuilder: FormBuilder) { }
  

  
    ngOnInit() {
    
    }
  
    
}
  
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'input-molecule',
    templateUrl: '../resources/input-molecule.component.html',
    styleUrls: ['../resources/styles/input-molecule.component.less']
})
export class InputMoleculeComponent implements OnInit {

   
    constructor(private router: Router, private formBuilder: FormBuilder) { }
  

  
    ngOnInit() {
    
    }
  
    
}
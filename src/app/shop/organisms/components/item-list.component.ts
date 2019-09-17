  
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'item-list',
    templateUrl: '../resources/item-list.component.html',
    styleUrls: ['../resources/styles/item-list.component.scss']
})
export class ItemListComponent implements OnInit {

   
    constructor(private router: Router, private formBuilder: FormBuilder) { }
  

  
    ngOnInit() {
    
    }

  
}
  
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'header-custom',
    templateUrl: '../resources/header-custom.component.html',
    styleUrls: ['../resources/styles/header-custom.component.scss']
})
export class HeaderCustomComponent implements OnInit {


    constructor(private router: Router) { }
  

  
    ngOnInit() {
    }

    find(){
        this.router.navigate(['list']);
    }
    
  
    
}
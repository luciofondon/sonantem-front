  
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
    selector: 'footer-custom',
    templateUrl: '../resources/footer-custom.component.html',
    styleUrls: ['../resources/styles/footer-custom.component.scss']
})
export class FooterCustomComponent implements OnInit {

    @Input() product:Product;

    constructor(private router: Router) { }
  

  
    ngOnInit() {
    }

    
  
    
}
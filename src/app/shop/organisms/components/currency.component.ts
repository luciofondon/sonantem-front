import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'currency',
  templateUrl: '../resources/currency.component.html',
  styleUrls: ['../resources/styles/currency.component.scss']
})
export class CurrencyComponent implements OnInit {
    public activeCurrency = 'eu';

    constructor(
        
    ) {
    
    }
    ngOnInit() {
    }

    public changeCurrency(currency) {
        this.activeCurrency = currency;
    }
}
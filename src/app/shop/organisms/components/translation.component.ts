import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'translation',
  templateUrl: '../resources/translation.component.html',
  styleUrls: ['../resources/styles/translation.component.scss']
})
export class TranslationComponent implements OnInit {
    public activeLang = 'es';

    constructor(
        
    ) {
    
    }
    ngOnInit() {
    }

    public changeLanguaje(lang) {
        this.activeLang = lang;
    }
}
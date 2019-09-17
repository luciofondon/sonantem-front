import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'translation',
  templateUrl: '../resources/translation.component.html',
  styleUrls: ['../resources/styles/translation.component.scss']
})
export class TranslationComponent implements OnInit {
    public activeLang = 'es';

    constructor() {//private translate: TranslateService
      //this.translate.setDefaultLang(this.activeLang);
    }

    ngOnInit() {
    }

    public changeLanguaje(lang) {
        this.activeLang = lang;
       // this.translate.use(lang);
    }
}
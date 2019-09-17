import { NgModule } from '@angular/core';
import { ShopService } from './services/shop.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './templates/components/detail.component';
import { HomeComponent } from './templates/components/home.component';
import { ListComponent } from './templates/components/list.component';
import { ResumeComponent } from './templates/components/resume.component';
import { ShopRoutingModule } from './shop-routing.module';
import { LoginComponent } from './templates/components/login.component';
import { ItemGridComponent } from './organisms/components/item-grid.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './templates/components/contact.component';
import { AboutComponent } from './templates/components/about.component';
import { CheckoutComponent } from './templates/components/checkout.component';
import { ItemCartComponent } from './molecules/components/item-cart.component';
import { ItemListComponent } from './organisms/components/item-list.component';
import { TranslationComponent } from './organisms/components/translation.component';
import { CurrencyComponent } from './organisms/components/currency.component';
import { CartComponent } from './organisms/components/cart.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        ShopRoutingModule,
        CommonModule
      
    ],
    declarations: [
        DetailComponent,
        HomeComponent,
        ListComponent,
        ResumeComponent,
        LoginComponent,
        ItemGridComponent,
        ItemListComponent,
        ContactComponent,
        AboutComponent,
        CheckoutComponent,
        ItemCartComponent,
        TranslationComponent,
        CurrencyComponent,
        CartComponent
    ],
    providers: [
        ShopService
    ],
    exports: [
        TranslationComponent,
        CurrencyComponent,
        CartComponent
    ]
})
export class ShopModule {

}
  
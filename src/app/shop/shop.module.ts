import { NgModule } from '@angular/core';
import { ShopService } from './services/shop.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './templates/components/detail.component';
import { HomeComponent } from './templates/components/home.component';
import { ListComponent } from './templates/components/list.component';
import { ResumeComponent } from './templates/components/resume.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        DetailComponent,
        HomeComponent,
        ListComponent,
        ResumeComponent
    ],
    providers: [
        ShopService
    ],
    exports: [

    ]
})
export class ShopModule {

}
  
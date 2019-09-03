import { NgModule } from '@angular/core';
import { PayService } from './services/pay.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        
    ],
    providers: [
        PayService
    ],
    exports: [

    ]
})
export class PayModule {

}
  
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ListComponent } from './components/list-add.component';
import { DetailComponent } from './components/detail.component';
import { ResumeComponent } from './components/resume.component';

const routes: Routes = [
  {
    path: '',
    component: HotelComponent,
    data: { title: 'List of Hotels' }
  },
  {
    path: 'add',
    component: HotelAddComponent,
    data: { title: 'List of Hotels' }
  },
  {
    path: 'edit/:id',
    component: HotelEditComponent,
    data: { title: 'List of Hotels' }
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {

}

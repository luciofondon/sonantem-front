import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './templates/components/home.component';
import { ListComponent } from './templates/components/list.component';
import { DetailComponent } from './templates/components/detail.component';
import { ResumeComponent } from './templates/components/resume.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'List of Hotels' }
  },
  {
    path: '/list',
    component: ListComponent,
    data: { title: 'List of Hotels' }
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    data: { title: 'List of Hotels' }
  },
  {
    path: 'resume',
    component: ResumeComponent,
    data: { title: 'List of Hotels' }
  }
 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {

}

/*
{
  path: 'car',
  loadChildren: () => import('./4-flow/car/car.module').then(m => m.CarModule)
}
]/
*/

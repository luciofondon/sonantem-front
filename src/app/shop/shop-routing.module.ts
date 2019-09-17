import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './templates/components/home.component';
import { ListComponent } from './templates/components/list.component';
import { DetailComponent } from './templates/components/detail.component';
import { ResumeComponent } from './templates/components/resume.component';
import { LoginComponent } from './templates/components/login.component';
import { ContactComponent } from './templates/components/contact.component';
import { AboutComponent } from './templates/components/about.component';
import { CheckoutComponent } from './templates/components/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'List of Hotels' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'list',
    component: ListComponent,
    data: { title: 'List of Hotels' }
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    data: { title: 'List of Hotels' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login Amazon' }
  },
  {
    path: 'resume',
    component: ResumeComponent,
    data: { title: 'Resumen' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' }
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    data: { title: 'Checkout' }
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

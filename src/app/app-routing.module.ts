import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
<<<<<<< HEAD
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'**',component:HomeComponent}
=======
import { LayOutComponent } from './Components/dashboard/lay-out/lay-out.component';
import { AddProductComponent } from './Components/dashboard/add-product/add-product.component';
import { SettingsComponent } from './Components/dashboard/settings/settings.component';
import { OrdersComponent } from './Components/dashboard/orders/orders.component';
import { TermsComponent } from './Components/dashboard/terms/terms.component';
import { EmptyProductComponent } from './Components/dashboard/empty-product/empty-product.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'owner-profile',component:LayOutComponent,
    children:[
      {path:'',component:EmptyProductComponent},
      {path:'add-product',component:AddProductComponent},
      {path:'settings',component:SettingsComponent},
      {path:'orders',component:OrdersComponent},
      {path:'terms',component:TermsComponent},
      {path:'**',redirectTo:''},
    ]},
  {path:'**',redirectTo:''}
>>>>>>> home-dashboard
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

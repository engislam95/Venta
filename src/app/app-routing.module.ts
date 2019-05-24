import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
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
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

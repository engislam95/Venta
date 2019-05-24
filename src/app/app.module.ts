import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { BrandsComponent } from './Components/brands/brands.component';
import { NewArrivalComponent } from './Components/new-arrival/new-arrival.component';
import { JoinUsComponent } from './Components/join-us/join-us.component';
import { PopularItemComponent } from './Components/popular-item/popular-item.component';
import { HeroSectionComponent } from './Components/hero-section/hero-section.component';
import { NavComponent } from './Components/nav/nav.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
=======
import { BrandsComponent } from './Components/home/brands/brands.component';
import { NewArrivalComponent } from './Components/home/new-arrival/new-arrival.component';
import { JoinUsComponent } from './Components/home/join-us/join-us.component';
import { PopularItemComponent } from './Components/home/popular-item/popular-item.component';
import { HeroSectionComponent } from './Components/home/hero-section/hero-section.component';
import { NavComponent } from './Components/nav/nav.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { OwlModule } from 'ngx-owl-carousel';
import { AddProductComponent } from './Components/dashboard/add-product/add-product.component';
import { LayOutComponent } from './Components/dashboard/lay-out/lay-out.component';
import { SettingsComponent } from './Components/dashboard/settings/settings.component';
import { OrdersComponent } from './Components/dashboard/orders/orders.component';
import { TermsComponent } from './Components/dashboard/terms/terms.component';
import { EmptyProductComponent } from './Components/dashboard/empty-product/empty-product.component';
>>>>>>> home-dashboard

@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    NewArrivalComponent,
    JoinUsComponent,
    PopularItemComponent,
    HeroSectionComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
<<<<<<< HEAD
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======
    AddProductComponent,
    LayOutComponent,
    SettingsComponent,
    OrdersComponent,
    TermsComponent,
    EmptyProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule
>>>>>>> home-dashboard
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

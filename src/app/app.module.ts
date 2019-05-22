import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

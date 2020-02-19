import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ApiService} from './login/api.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarsComponent } from './cars/cars.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { AddressComponent } from './address/address.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { CreateAddressComponent } from './address/create-address/create-address.component';
import { UpdateAddressComponent } from './address/update-address/update-address.component';
import { CookieService } from 'ngx-cookie-service';
import { RouteComponent } from './route/route.component';
import {CreateCarComponent} from './cars/create-car/create-car.component';
import {ApiCarService} from './cars/api.car.service';
import { UpdateCarComponent } from './cars/update-car/update-car.component';
import { CreateRouteComponent } from './route/create-route/create-route.component';
import {DateTimePickerModule} from '@syncfusion/ej2-angular-calendars';
import { UpdateRouteComponent } from './route/update-route/update-route.component';
import { BecomeDriverComponent } from './become-driver/become-driver.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RoutePageComponent } from './route-page/route-page.component';
import { AllRoutesComponent } from './all-routes/all-routes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarsComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    AddressComponent,
    SidebarComponent,
    CreateAddressComponent,
    UpdateAddressComponent,
    RouteComponent,
    CreateCarComponent,
    UpdateCarComponent,
    CreateRouteComponent,
    UpdateRouteComponent,
    BecomeDriverComponent,
    HomePageComponent,
    RoutePageComponent,
    AllRoutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DateTimePickerModule
  ],
  providers: [ApiService, CookieService, ApiCarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

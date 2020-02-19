import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CarsComponent} from './cars/cars.component';
import {ProfileComponent} from './profile/profile.component';
import {AddressComponent} from './address/address.component';
import {CreateAddressComponent} from './address/create-address/create-address.component';
import {UpdateAddressComponent} from './address/update-address/update-address.component';
import {RouteComponent} from './route/route.component';
import {CreateCarComponent} from './cars/create-car/create-car.component';
import {UpdateCarComponent} from './cars/update-car/update-car.component';
import {CreateRouteComponent} from './route/create-route/create-route.component';
import {UpdateRouteComponent} from './route/update-route/update-route.component';
import {BecomeDriverComponent} from './become-driver/become-driver.component';
import {HomePageComponent} from './home-page/home-page.component';
import {RoutePageComponent} from './route-page/route-page.component';
import {AllRoutesComponent} from './all-routes/all-routes.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'create-car', component: CreateCarComponent },
  { path: 'update-car/:id', component: UpdateCarComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'address', component: AddressComponent},
  { path: 'create-address', component: CreateAddressComponent},
  { path: 'update-address/:id', component: UpdateAddressComponent},
  { path: 'profile/route', component: RouteComponent},
  { path: 'create-route', component: CreateRouteComponent},
  { path: 'update-route/:id', component: UpdateRouteComponent},
  { path: 'become-a-driver', component: BecomeDriverComponent},
  { path: 'route/:id', component: RoutePageComponent},
  { path: 'all-routes', component: AllRoutesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

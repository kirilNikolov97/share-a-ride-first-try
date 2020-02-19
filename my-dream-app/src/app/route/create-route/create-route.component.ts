import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {Route} from '../../model/route.model';
import {Car} from '../../model/car.model';
import {ApiCarService} from '../../cars/api.car.service';
import {ApiServiceAddress} from '../../address/api.sercvice';
import {Address} from '../../model/address.model';
import {RouteApiServiceProfile} from '../route.api.service';

@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.css']
})
export class CreateRouteComponent implements OnInit {

  route: Route;
  cars: Car[];
  addresses: Address[];
  selectedAddress: Address;
  selectedCar: Car;
  date: Date = new Date ('05/16/2017 3:00 AM');


  constructor(
    private router: Router,
    private authService: AuthService,
    private carService: ApiCarService,
    private addressService: ApiServiceAddress,
    private apiService: RouteApiServiceProfile
) { }

  ngOnInit() {
    this.selectedCar = new Car();
    this.selectedAddress = new Address();

    this.carService.getCars(this.authService.getAccessToken()).subscribe( res => {
      this.cars = res;
    });

    this.addressService.getAddresses(this.authService.getAccessToken()).subscribe( res => {
      this.addresses = res;
    });
  }


  onSubmit(value: any) {

    this.apiService.addRoute(this.authService.getAccessToken(), this.selectedCar.id, this.selectedAddress.id, this.date).subscribe( res => {
      this.router.navigate(['profile']);
    });

    console.log(value);
  }
}

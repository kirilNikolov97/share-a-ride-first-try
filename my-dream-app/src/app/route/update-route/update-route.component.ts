import { Component, OnInit } from '@angular/core';
import {Route} from '../../model/route.model';
import {Car} from '../../model/car.model';
import {Address} from '../../model/address.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {ApiCarService} from '../../cars/api.car.service';
import {ApiServiceAddress} from '../../address/api.sercvice';
import {RouteApiServiceProfile} from '../route.api.service';

@Component({
  selector: 'app-update-route',
  templateUrl: './update-route.component.html',
  styleUrls: ['./update-route.component.css']
})
export class UpdateRouteComponent implements OnInit {

  route: Route;
  cars: Car[];
  addresses: Address[];
  selectedAddress: Address;
  selectedCar: Car;
  date: Date = new Date ();
  routeId: number;

  constructor(
    private router: Router,
    private authService: AuthService,
    private carService: ApiCarService,
    private addressService: ApiServiceAddress,
    private apiService: RouteApiServiceProfile,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route = new Route();
    this.routeId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.apiService.getRouteById(this.authService.getAccessToken(), this.routeId).subscribe( res => {
      this.route = res;
      this.date = res.dateRoute;
      this.selectedCar = res.car;

      console.log(res);
    });

    // this.selectedAddress = this.route.routeStops.find( rs => {
    //   return rs.passengerEnum.toString() === 'DRIVER';
    // }).address;

    this.carService.getCars(this.authService.getAccessToken()).subscribe( res => {
      this.cars = res;
    });

    this.addressService.getAddresses(this.authService.getAccessToken()).subscribe( res => {
      this.addresses = res;
    });
  }

  onSubmit(value: any) {

    this.apiService.updateFutureRoute(this.authService.getAccessToken(), this.selectedCar.id, this.selectedAddress.id, this.routeId, this.date).subscribe( res => {
      this.router.navigate(['profile']);
    });

  }

}

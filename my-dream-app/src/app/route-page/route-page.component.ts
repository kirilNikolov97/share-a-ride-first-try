import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {ApiCarService} from '../cars/api.car.service';
import {ApiServiceAddress} from '../address/api.sercvice';
import {RouteApiServiceProfile} from '../route/route.api.service';
import {Route} from '../model/route.model';
import {Car} from '../model/car.model';
import {RouteStop} from '../model/route-stops.model';
import {Address} from '../model/address.model';
import {ApiRoutePageService} from './api.route-page.service';

@Component({
  selector: 'app-route-page',
  templateUrl: './route-page.component.html',
  styleUrls: ['./route-page.component.css']
})
export class RoutePageComponent implements OnInit {

  route: Route;
  routeId: number;
  car: Car;
  routeStops: RouteStop[];
  startAddressRoute: Address;
  userAddresses: Address[];
  selectedAddress: Address;

  constructor(
    private router: Router,
    private authService: AuthService,
    private carService: ApiCarService,
    private addressService: ApiServiceAddress,
    private apiService: RouteApiServiceProfile,
    private activatedRoute: ActivatedRoute,
    private routePageService: ApiRoutePageService
  ) { }

  ngOnInit() {
    this.route = new Route();
    this.car = new Car();
    this.startAddressRoute = new Address();

    this.routeId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.apiService.getRouteById(this.authService.getAccessToken(), this.routeId).subscribe( res => {
      this.route = res;
      this.car = res.car;

      // for (let i of res.routeStops) {
      //   if (i.passengerEnum.toString() === 'DRIVER') {
      //     this.startAddressRoute = i.addressId;
      //   }
      // }

      console.log(res);
    });

    this.routePageService.getAddresses(this.authService.getAccessToken()).subscribe( res => {
      this.userAddresses = res;
    });
  }

  onSubmit(value: any) {
    this.routePageService.saveSeat(this.authService.getAccessToken(), this.selectedAddress.id, this.routeId).subscribe( res => {
      console.log(res);
    });
  }
}

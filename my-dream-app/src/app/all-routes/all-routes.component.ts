import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {ApiCarService} from '../cars/api.car.service';
import {ApiServiceAddress} from '../address/api.sercvice';
import {RouteApiServiceProfile} from '../route/route.api.service';
import {ApiRoutePageService} from '../route-page/api.route-page.service';
import {Route} from '../model/route.model';
import {Car} from '../model/car.model';
import {RouteStop} from '../model/route-stops.model';
import {Address} from '../model/address.model';
import {HomePageApiService} from '../home-page/home-page.api.service';
import {ApiAllRouteService} from './api.all-route.service';

@Component({
  selector: 'app-all-routes',
  templateUrl: './all-routes.component.html',
  styleUrls: ['./all-routes.component.css']
})
export class AllRoutesComponent implements OnInit {

  lastRoutes: Route[];

  constructor(
    private router: Router,
    private apiService: ApiAllRouteService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.apiService.getLastRoutes(this.authService.getAccessToken(), 2, 'sort', 'filter').subscribe( res => {
      this.lastRoutes = res;
      console.log(res);
    });
  }

}

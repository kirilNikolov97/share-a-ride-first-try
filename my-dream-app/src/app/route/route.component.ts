import { Component, OnInit } from '@angular/core';
import {RouteApiServiceProfile} from './route.api.service';
import {AuthService} from '../service/auth.service';
import {Route} from '../model/route.model';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  userRoutesAsDriver: Route[];
  futureRoutesAsDriver: Route[];
  userRoutesAsPassenger: Route[];
  futureRoutesAsPassenger: Route[];

  constructor(
    private router: Router,
    private apiService: RouteApiServiceProfile,
    private authService: AuthService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {

    this.apiService.getUserRoutesAsDriver(this.authService.getAccessToken()).subscribe( res => {
      this.userRoutesAsDriver = res;
      console.log(res);
    });

    this.apiService.getFutureUserRoutesAsDriver(this.authService.getAccessToken()).subscribe( res => {
      this.futureRoutesAsDriver = res;
      console.log(res);
    });

    this.apiService.getUserRoutesAsPassenger(this.authService.getAccessToken()).subscribe( res => {
      this.userRoutesAsPassenger = res;
      console.log(res);
    });

    this.apiService.getFutureUserRoutesAsPassenger(this.authService.getAccessToken()).subscribe( res => {
      this.futureRoutesAsPassenger = res;
      console.log(res);
    });

  }

}

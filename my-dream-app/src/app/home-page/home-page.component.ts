import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {CookieService} from 'ngx-cookie-service';
import {HomePageApiService} from './home-page.api.service';
import {Route} from '../model/route.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  lastRoutes: Route[];

  constructor(
    private router: Router,
    private apiService: HomePageApiService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.apiService.getLastRoutes(10, this.authService.getAccessToken()).subscribe( res => {
      this.lastRoutes = res;
    });

  }

}

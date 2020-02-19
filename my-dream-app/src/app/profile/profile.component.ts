import { Component, OnInit } from '@angular/core';
import {User} from '../model/user.model';
import {Router} from '@angular/router';
import {ApiServiceProfile} from './api.service';
import {MyJwt} from '../cars/cars.component';
import {FormBuilder} from '@angular/forms';
import {Address} from '../model/address.model';
import {LoginComponent} from '../login/login.component';
import {AuthService} from '../service/auth.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiServiceProfile: ApiServiceProfile,
    private authService: AuthService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.user = new User();

    this.apiServiceProfile.getUser(this.authService.getAccessToken()).subscribe( res => {
      this.user = res;
      this.authService.setUser = this.user;
      this.cookieService.set('currentUserCookie', res.username);
      window.sessionStorage.setItem('currentUser', this.user.username);
      console.log(res);
    });

  }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpParams} from '@angular/common/http';
import {ApiService} from './api.service';
import {AuthService} from '../service/auth.service';
import {User} from '../model/user.model';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin = false;
  isLoggedIn = false;
  currentUser: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
    private cookiesService: CookieService
  ) {}

  ngOnInit() {
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('currentUser');
    this.cookiesService.delete('currentUserCookie');
    this.cookiesService.delete('isDriver');

    this.isLoggedIn = false;

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const body = new HttpParams()
      .set('username', this.loginForm.controls.username.value)
      .set('password', this.loginForm.controls.password.value)
      .set('grant_type', 'password');

    this.apiService.login(body.toString()).subscribe(data => {
      window.sessionStorage.setItem('token', JSON.stringify(data));
      this.isLoggedIn = true;
      this.authService.isLoggedIn = true;
      console.log(window.sessionStorage.getItem('token'));
      this.router.navigate(['profile']);
    }, error => {
      alert(error.error.error_description);
      return;
    });

  }


}

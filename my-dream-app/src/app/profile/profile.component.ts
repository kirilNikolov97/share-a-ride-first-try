import { Component, OnInit } from '@angular/core';
import {User} from '../model/user.model';
import {Router} from '@angular/router';
import {ApiServiceProfile} from './api.service';
import {MyJwt} from '../cars/cars.component';
import {FormBuilder} from '@angular/forms';
import {Address} from '../model/address.model';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  phone: string;

  private jwt: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiServiceProfile: ApiServiceProfile) { }

  ngOnInit() {
    this.user = new User();

    this.jwt = window.sessionStorage.getItem('token');

    let result: MyJwt = JSON.parse(this.jwt);

    this.apiServiceProfile.getUser(result.access_token).subscribe( res => {
      this.user = res;
      window.sessionStorage.setItem('currentUser', this.user.username);
      console.log(res);
    });

  }

}

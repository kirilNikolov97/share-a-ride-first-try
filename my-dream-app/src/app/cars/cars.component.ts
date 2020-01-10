import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../login/api.service';
import { HttpClientModule } from '@angular/common/http';

export class Car {
  carId: number;
  manufacturer: string;
  model: string;
  seats: number;
  year: number;
  color: string;
}

export class MyJwt {
  access_token: string;
}

export class UserAndAuthorities {
  user: string;
  authorities: string[];
}

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[];
  private jwt: string;
  myUser: UserAndAuthorities;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.myUser = new UserAndAuthorities();

    this.jwt = window.sessionStorage.getItem('token');
    let result: MyJwt = JSON.parse(this.jwt);

    this.apiService.getCars(result.access_token).subscribe(res => {
      this.cars = res;
      console.log(res);
    });


  }

  onClickMe() {
    this.jwt = window.sessionStorage.getItem('token');
    let result: MyJwt = JSON.parse(this.jwt);

    this.apiService.getMyCars(result.access_token).subscribe( res => {
      this.cars = res;
      console.log(res);
    });
  }

}

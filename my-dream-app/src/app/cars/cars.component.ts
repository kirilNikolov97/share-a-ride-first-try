import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {Car} from '../model/car.model';
import {ApiCarService} from './api.car.service';


export class MyJwt {
  access_token: string;
}

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[];
  private jwt: string;

  constructor(private router: Router, private apiService: ApiCarService) { }

  ngOnInit() {

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

  deleteCar(carId) {
    this.jwt = window.sessionStorage.getItem('token');
    let result: MyJwt = JSON.parse(this.jwt);

    this.apiService.deleteCar(result.access_token, carId).subscribe( res => {
      console.log(res);
    });
  }
}

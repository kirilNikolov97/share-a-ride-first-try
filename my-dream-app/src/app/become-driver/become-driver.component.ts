import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {ApiBecomeDriverService} from './api.become-driver.service';

@Component({
  selector: 'app-become-driver',
  templateUrl: './become-driver.component.html',
  styleUrls: ['./become-driver.component.css']
})
export class BecomeDriverComponent implements OnInit {

  isDriverCheckbox: false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private apiService: ApiBecomeDriverService
  ) { }

  ngOnInit() {
  }

  onSubmit(value: any) {

    if (this.isDriverCheckbox) {
      this.apiService.updateFutureRoute(this.authService.getAccessToken()).subscribe( res => {
        this.router.navigate(['profile']);
      });
    }


  }
}

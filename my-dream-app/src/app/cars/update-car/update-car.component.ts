import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Car} from '../../model/car.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {ApiCarService} from '../api.car.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  carForm: FormGroup;
  car: Car;
  carId: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private apiService: ApiCarService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.car = new Car();
    this.carId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.apiService.getCarById(this.authService.getAccessToken(), this.carId).subscribe( res => {
      this.car = res;
    });

    this.carForm = new FormGroup({
      manufacturer: new FormControl(),
      model: new FormControl(),
      seats: new FormControl(),
      color: new FormControl(),
      year: new FormControl()
    });
  }

  onSubmit() {
    this.car.manufacturer = this.carForm.get('manufacturer').value;
    this.car.model = this.carForm.get('model').value;
    this.car.seats = this.carForm.get('seats').value;
    this.car.color = this.carForm.get('color').value;
    this.car.year = this.carForm.get('year').value;

    this.apiService.updateCar(this.authService.getAccessToken(), this.car).subscribe( res => {
      this.router.navigate(['cars']);
    });
  }
}

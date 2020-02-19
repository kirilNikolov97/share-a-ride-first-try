import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Car} from '../../model/car.model';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {ApiCarService} from '../api.car.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  carForm: FormGroup;
  car: Car;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private apiService: ApiCarService) { }

  ngOnInit() {
    this.carForm = new FormGroup( {
      manufacturer: new FormControl(),
      model: new FormControl(),
      seats: new FormControl(),
      color: new FormControl(),
      year: new FormControl()
    });
  }

  onSubmit() {
    this.car = new Car();
    this.car.manufacturer = this.carForm.get('manufacturer').value;
    this.car.model = this.carForm.get('model').value;
    this.car.seats = this.carForm.get('seats').value;
    this.car.color = this.carForm.get('color').value;
    this.car.year = this.carForm.get('year').value;

    this.apiService.addCar(this.authService.getAccessToken(), this.car).subscribe( res => {
      this.router.navigate(['profile']);
    });
  }
}

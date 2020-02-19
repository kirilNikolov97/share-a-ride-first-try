import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Address} from '../../model/address.model';
import {ApiServiceAddress} from '../api.sercvice';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.css']
})
export class CreateAddressComponent implements OnInit {

  addressForm: FormGroup;
  address: Address;
  isCreation: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private apiService: ApiServiceAddress) { }

  ngOnInit() {
    this.addressForm = new FormGroup({
      city: new FormControl(),
      district: new FormControl(),
      street: new FormControl(),
      additionalInfo: new FormControl()
    });
  }

  onSubmit() {
    this.address = new Address();
    this.address.city = this.addressForm.get('city').value;
    this.address.district = this.addressForm.get('district').value;
    this.address.street = this.addressForm.get('street').value;
    this.address.additionalInfo = this.addressForm.get('additionalInfo').value;

    this.apiService.addAddress(this.authService.getAccessToken(), this.address).subscribe( res => {
      console.log(res);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Address} from '../../model/address.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {ApiServiceAddress} from '../api.sercvice';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {
  addressForm: FormGroup;
  address: Address;
  addressId: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private apiService: ApiServiceAddress,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.address = new Address();
    this.addressId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.apiService.getAddressById(this.authService.getAccessToken(), this.addressId).subscribe( res => {
      this.address = res;
    });

    this.addressForm = new FormGroup({
      city: new FormControl(),
      district: new FormControl(),
      street: new FormControl(),
      additionalInfo: new FormControl()
    });
  }

  onSubmit() {
    this.address.city = this.addressForm.get('city').value;
    this.address.district = this.addressForm.get('district').value;
    this.address.street = this.addressForm.get('street').value;
    this.address.additionalInfo = this.addressForm.get('additionalInfo').value;

    this.apiService.updateAddress(this.authService.getAccessToken(), this.address).subscribe( res => {
      this.router.navigate(['profile']);
    });
  }
}

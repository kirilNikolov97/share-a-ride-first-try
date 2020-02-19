import { Component, OnInit } from '@angular/core';
import {Address} from '../model/address.model';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiServiceAddress} from './api.sercvice';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addresses: Address[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiServiceAddress,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.apiService.getAddresses(this.authService.getAccessToken()).subscribe(res => {
      this.addresses = res;
    });
  }

  deleteAddress(addressId) {
    this.apiService.deleteAddress(this.authService.getAccessToken(), addressId).subscribe( res => {
      console.log('Address ID: ' + addressId);
    });
  }

  editAddress(id: number) {
    
  }
}

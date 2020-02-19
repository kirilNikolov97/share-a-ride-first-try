import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user.model';
import {Address} from '../model/address.model';


@Injectable(
  {providedIn: 'root'}
)
export class ApiServiceAddress {

  constructor(private http: HttpClient) {
  }

  getAddresses(accessToken) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/x-www-form-urlencoded'
    };

    return this.http.get<Address[]>('http://localhost:8762/profile-service/address', {headers});
  }

  getAddressById(accessToken, addressId) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/x-www-form-urlencoded'
    };

    return this.http.get<Address>('http://localhost:8762/profile-service/address/' + addressId, {headers});
  }

  updateAddress(accessToken, address) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/json'
    };

    return this.http.patch<Address>('http://localhost:8762/profile-service/address', JSON.stringify(address) , {headers});
  }

  addAddress(accessToken, address) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/json'
    };

    return this.http.post<Address>('http://localhost:8762/profile-service/address', JSON.stringify(address) , {headers});
  }

  deleteAddress(accessToken, addressId) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/x-www-form-urlencoded'
    };

    return this.http.delete<Address>('http://localhost:8762/profile-service/address?addressId=' + addressId, {headers});
  }


}

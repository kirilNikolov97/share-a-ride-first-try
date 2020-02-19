import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Route} from '../model/route.model';
import {Address} from '../model/address.model';

@Injectable(
  {providedIn: 'root'}
)
export class ApiRoutePageService {

  constructor(private http: HttpClient) {
  }

  getAddresses(accessToken) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/x-www-form-urlencoded'
    };

    return this.http.get<Address[]>('http://localhost:8762/route-service/addresses', {headers});
  }

  saveSeat(accessToken: string, addressId: number, routeId: number) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/json'
    };

    return this.http.get<Route>('http://localhost:8762/route-service/route/' + routeId + '?addressId=' + addressId, {headers});
  }

}

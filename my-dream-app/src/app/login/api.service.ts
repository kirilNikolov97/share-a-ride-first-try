import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from '../model/car.model';
import {Address} from '../model/address.model';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  login(loginPayload) {
    const headers = {
      'Authorization': 'Basic ' + btoa('share-a-ride:clientpass'),
      'Content-type': 'application/x-www-form-urlencoded'
    }
    return this.http.post('http://localhost:8762/authentication-service/' + 'oauth/token', loginPayload, {headers});
  }

}

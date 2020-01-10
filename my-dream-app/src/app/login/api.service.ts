import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car, UserAndAuthorities} from '../cars/cars.component';


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

  getCars(accessToken) {

    console.log(accessToken);

    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/x-www-form-urlencoded'
    }
    return this.http.get<Car[]>('http://localhost:8762/car-service/cars', {headers});
  }

  getUser(accessToken) {

    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/json'
    }

    return this.http.get<UserAndAuthorities>('http://localhost:8762/authentication-service/user', {headers});
  }

  getMyCars(accessToken) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/x-www-form-urlencoded'
    }
    return this.http.get<Car[]>('http://localhost:8762/car-service/mycars', {headers});
  }

}

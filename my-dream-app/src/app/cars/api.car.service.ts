import {Car} from '../model/car.model';
import {Address} from '../model/address.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiCarService {

  constructor(private http: HttpClient) {
  }

  getCars(accessToken) {

    console.log(accessToken);

    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/x-www-form-urlencoded'
    }
    return this.http.get<Car[]>('http://localhost:8762/profile-service/cars', {headers});
  }

  getMyCars(accessToken) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/x-www-form-urlencoded'
    }
    return this.http.get<Car[]>('http://localhost:8762/car-service/mycars', {headers});
  }

  deleteCar(accessToken, carId) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/x-www-form-urlencoded'
    };

    return this.http.delete<Address>('http://localhost:8762/profile-service/car?carId=' + carId, {headers});
  }


  addCar(accessToken: string, car: Car) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/json'
    };

    return this.http.post<Address>('http://localhost:8762/profile-service/car', JSON.stringify(car) , {headers});
  }

  getCarById(accessToken: string, carId: number) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/x-www-form-urlencoded'
    };

    return this.http.get<Car>('http://localhost:8762/profile-service/car/' + carId, {headers});
  }

  updateCar(accessToken: string, car: Car) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/json'
    };
    return this.http.patch<Address>('http://localhost:8762/profile-service/car', JSON.stringify(car) , {headers});
  }

  updateAddress(accessToken, address) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/json'
    };

    return this.http.patch<Address>('http://localhost:8762/profile-service/address', JSON.stringify(address) , {headers});
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Route} from '../model/route.model';


@Injectable(
  {providedIn: 'root'}
)
export class RouteApiServiceProfile {

  constructor(private http: HttpClient) {
  }

  getUserRoutesAsDriver(accessToken) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/x-www-form-urlencoded'
    };

    return this.http.get<Route[]>('http://localhost:8762/profile-service/routesAsDriver', {headers});
  }

  getFutureUserRoutesAsDriver(accessToken: string) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/x-www-form-urlencoded'
    };

    return this.http.get<Route[]>('http://localhost:8762/profile-service/futureRoutesAsDriver', {headers});
  }

  getUserRoutesAsPassenger(accessToken) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/x-www-form-urlencoded'
    };

    return this.http.get<Route[]>('http://localhost:8762/profile-service/routesAsPassenger', {headers});
  }

  addRoute(accessToken: string, carId: number, addressId: number, date: Date) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/json'
    };

    return this.http.post<Route>('http://localhost:8762/profile-service/route?carId=' + carId +
      '&addressId=' + addressId, JSON.stringify(date) , {headers});
  }

  updateFutureRoute(accessToken: string, carId: number, addressId: number, routeId: number, date: Date) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/json'
    };

    return this.http.patch<Route>('http://localhost:8762/profile-service/route?carId=' + carId +
      '&addressId=' + addressId +
      '&routeId=' + routeId, JSON.stringify(date) , {headers});
  }

  getRouteById(accessToken: string, routeId: number) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/x-www-form-urlencoded'
    };

    return this.http.get<Route>('http://localhost:8762/profile-service/route/' + routeId, {headers});
  }

  getFutureUserRoutesAsPassenger(accessToken: string) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/x-www-form-urlencoded'
    };

    return this.http.get<Route[]>('http://localhost:8762/profile-service/futureRoutesAsPassenger', {headers});
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Route} from '../model/route.model';

@Injectable(
  {providedIn: 'root'}
)
export class ApiAllRouteService {

  constructor(private http: HttpClient) {
  }

  getLastRoutes(accessToken: string, page: number, sort: string, filter: string) {
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      'Content-type': 'application/x-www-form-urlencoded'
    };

    return this.http.get<Route[]>('http://localhost:8762/route-service/route/allRoutes' + '?page=' + page + '&sort=' + sort + '&filter=' + filter, {headers});
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Route} from '../model/route.model';

@Injectable(
  {providedIn: 'root'}
)
export class HomePageApiService {

  constructor(private http: HttpClient) {
  }

  getLastRoutes(limit: number, accessToken: string) {
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      'Content-type': 'application/x-www-form-urlencoded'
    };

    return this.http.get<Route[]>('http://localhost:8762/profile-service/lastRoutes' + '?limit=' + limit, {headers});
  }

}

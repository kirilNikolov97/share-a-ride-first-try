import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user.model';


@Injectable(
  {providedIn: 'root'}
)
export class ApiServiceProfile {

  constructor(private http: HttpClient) {
  }

  getUser(accessToken) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/x-www-form-urlencoded'
    };

    return this.http.get<User>('http://localhost:8762/profile-service/user', {headers});
  }


}

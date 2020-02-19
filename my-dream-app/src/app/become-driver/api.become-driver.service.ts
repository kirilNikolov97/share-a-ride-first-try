import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user.model';

@Injectable(
  {providedIn: 'root'}
)
export class ApiBecomeDriverService {

  constructor(private http: HttpClient) {
  }

  updateFutureRoute(accessToken: string) {
    const headers = {
      'Authorization': 'Bearer ' + accessToken,
      'Content-type': 'application/json'
    };

    return this.http.get<User>('http://localhost:8762/profile-service/becomeDriver', {headers});
  }

}

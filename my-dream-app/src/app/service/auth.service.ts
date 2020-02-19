import {EventEmitter, Injectable, Output} from '@angular/core';
import {MyJwt} from '../cars/cars.component';
import { CookieService } from 'ngx-cookie-service';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  private jwt: string;
  private loggedIn: boolean;
  private user: User;

  constructor(private cookieService: CookieService) {
  }

  getAccessToken() {
    this.jwt = window.sessionStorage.getItem('token');
    const result: MyJwt = JSON.parse(this.jwt);
    return result.access_token;
  }

  get isLoggedIn(): boolean {
    return this.loggedIn;
  }

  set isLoggedIn(value: boolean) {
    this.loggedIn = value;
  }


  get getUsername(): string {
    return this.cookieService.get('currentUserCookie');
  }

  set setUser(value: User) {
    this.user = value;
    this.cookieService.set('isDriver', String(this.user.driver));
  }

  get getUser(): User {
    return this.user;
  }
}

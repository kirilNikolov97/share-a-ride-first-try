import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../../login/login.component';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;

  constructor(private router: Router, private authService: AuthService) {
    this.authService.getLoggedInName.subscribe(name => this.changeName(name));
  }

  ngOnInit() {
    this.username = window.sessionStorage.getItem('currentUser');
  }

  private changeName(name: string): void {
    this.username = name;
  }

}

import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../../login/login.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;

  constructor(private router: Router) { }

  ngOnInit() {

    this.username = window.sessionStorage.getItem('currentUser');

  }

}

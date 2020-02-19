import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authService: AuthService, private cookieService: CookieService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    // $('body').toggleClass('sb-sidenav-toggled');
  }

  toggleSidebar(e: any) {
    // console.log(e);
    $('body').toggleClass('sb-sidenav-toggled');
  }

}

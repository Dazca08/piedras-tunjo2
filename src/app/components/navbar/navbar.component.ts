import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

declare var $: any;
const OneSignal = window['OneSignal'] || [];

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

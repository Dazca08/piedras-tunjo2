import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.init();
  }

  async init() {
    this.authService.auth$.subscribe(res => {
      if (res === false) {
        console.log('LOGOUT !!!!');
        // OneSignal Subscribe
        const OneSignal = window['OneSignal'] || [];
        OneSignal.setSubscription(false);
      }
    });
  }

}

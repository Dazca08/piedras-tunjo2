import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

const appId = 'c9b72292-e3e6-478d-a6cd-601e195ff462';
declare var window: any;
const OneSignal = window.OneSignal || [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'AngularWeb';

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.oneSignalManage();
  }

  oneSignalManage() {
    OneSignal.push( async () => {
      // If we're on an unsupported browser, do nothing
      if (!OneSignal.isPushNotificationsSupported()) {
        return;
      }
      const auth = await this.authService.validateToken();
      if (!auth) {
        return;
      }
      const state =  await this.getSubscriptionState();
      OneSignal.init({
        appId,
        notifyButton: {
          enable: (!state.isPushEnabled || state.isOptedOut)
        },
      });
    });
  }

  async getSubscriptionState() {
    const result = await Promise.all([
      OneSignal.isPushNotificationsEnabled(),
      OneSignal.isOptedOut()
    ]);
    const isPushEnabled = result[0];
    const isOptedOut = result[1];
    return {
      isPushEnabled,
      isOptedOut
    };
  }
}

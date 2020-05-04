import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

const appId = '94a25d89-60f4-4c25-a379-96dfc39c61c6';
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
    this.authService.auth$.subscribe(res => {
      if (res === true) {
        this.oneSignalManage();
      }
    });
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
      OneSignal.init({
        appId,
        notifyButton: {
          enable: true
        }
      });
      // this.getSubscriptionState().then(state => {
      //   OneSignal.init({
      //     appId,
      //     notifyButton: {
      //       // enable: (!state.isPushEnabled || state.isOptedOut)
      //       enable: true
      //     },
      //   });
      // });
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

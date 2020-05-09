import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

const appId = '94a25d89-60f4-4c25-a379-96dfc39c61c6';
declare var window: any;
const OneSignal = window.OneSignal || [];
const subscribeText = 'Subscribe to Notifications';
const unsubscribeText = 'Unsubscribe from Notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'AngularWeb';
  buttonText = '';

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

  onManageWebPushSubscriptionButtonClicked() {
    this.getSubscriptionState().then((state) => {
      if (state.isPushEnabled) {
          /* Subscribed, opt them out */
          OneSignal.setSubscription(false);
      } else {
          if (state.isOptedOut) {
              /* Opted out, opt them back in */
              OneSignal.setSubscription(true);
          } else {
              /* Unsubscribed, subscribe them */
              OneSignal.registerForPushNotifications();
          }
      }
    });
  }

  updateMangeWebPushSubscriptionButton() {
    this.getSubscriptionState().then((state) => {
      alert(JSON.stringify(state));
      this.buttonText = !state.isPushEnabled || state.isOptedOut ? subscribeText : unsubscribeText;
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

      // Init
      OneSignal.init({
        appId,
        // requiresUserPrivacyConsent: true,
        autoResubscribe: false,
        notifyButton: {
          enable: false,
        },
      });

      this.updateMangeWebPushSubscriptionButton();
      OneSignal.on('subscriptionChange', (isSubscribed) => {
        /* If the user's subscription state changes during the page's session, update the button text */
        this.updateMangeWebPushSubscriptionButton();
      });
    });
  }
}

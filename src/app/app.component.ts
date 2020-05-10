import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

const applicationId = '94a25d89-60f4-4c25-a379-96dfc39c61c6';
const OneSignal = window['OneSignal'] || [];
declare var window: any;

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
    console.log('Init OneSignal');
    OneSignal.push(['init', {
      appId: applicationId,
      autoRegister: false,
      allowLocalhostAsSecureOrigin: true,
      notifyButton: {
        enable: false
      }
    }]);

    console.log('OneSignal Initialized');
    OneSignal.push(() => {
      console.log('Register For Push');
      // OneSignal.push(['registerForPushNotifications']);
    });

    OneSignal.push(() => {
      // Occurs when the user's subscription changes to a new value.
      OneSignal.on('subscriptionChange', (isSubscribed) => {
        console.log('The user\'s subscription state is now:', isSubscribed);
        OneSignal.getUserId().then((userId) => {
          console.log('User ID is', userId);
        });
      });
    });

    // auth$
    this.authService.auth$.subscribe((res: boolean) => {
      // OneSignal control
      OneSignal.setSubscription(res);
    });
  }

  // onManageWebPushSubscriptionButtonClicked() {
  //   this.getSubscriptionState().then((state) => {
  //     if (state.isPushEnabled) {
  //         /* Subscribed, opt them out */
  //         OneSignal.setSubscription(false);
  //     } else {
  //         if (state.isOptedOut) {
  //             /* Opted out, opt them back in */
  //             OneSignal.setSubscription(true);
  //         } else {
  //             /* Unsubscribed, subscribe them */
  //             OneSignal.registerForPushNotifications();
  //         }
  //     }
  //   });
  // }

  // async getSubscriptionState() {
  //   const result = await Promise.all([
  //     OneSignal.isPushNotificationsEnabled(),
  //     OneSignal.isOptedOut()
  //   ]);
  //   const isPushEnabled = result[0];
  //   const isOptedOut = result[1];
  //   return {
  //     isPushEnabled,
  //     isOptedOut
  //   };
  // }
}

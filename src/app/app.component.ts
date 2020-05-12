import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const applicationId = environment.oneSignalAppId;
declare var window: any;
const OneSignal = window['OneSignal'] || [];
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Piedras del Tunjo';
  useragentid = null;
  btnUnsubscribe = false;
  btnSubscribe = false;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.auth$.subscribe(res => {
      if (res === true) {
        this.init();
      }
    });
    this.init();
  }

  async init() {
    const auth = await this.authService.validateToken();
    if (auth) {
      const oneSignal = await this.initOneSignal();
      if (oneSignal === true) {
        const check = await this.checkUserId();
        if (check === true) {
          const check2 = await this.checkSubscriptionChange();
          console.log('OneSignal Initialized!');
        }
      }
    }
  }

  initOneSignal() {
    return new Promise(resolve => {
      // Init OneSignal
      OneSignal.push(() => {
        OneSignal.init({
          appId: applicationId,
          autoRegister: false,
          notifyButton: {
            enable: true
          },
          persistNotification: false
        });
        resolve(true);
      });
    });
  }

  checkUserId() {
    // Firstly this will check user id
    return new Promise(resolve => {
      OneSignal.push(() =>  {
        OneSignal.getUserId().then((userId) => {
          // CONSOLE
          console.log({ userId });
          if (userId === null) {
            resolve(true);
          } else {
            this.useragentid = userId;
            OneSignal.push(['getNotificationPermission', (permission) => {
            }]);
            OneSignal.isPushNotificationsEnabled((isEnabled) => {
              // CONSOLE
              console.log({ isEnabled });
              resolve(true);
            });
          }
        });
      });
    });
  }

  checkSubscriptionChange() {
    return new Promise(resolve => {
      // Secondly this will check when subscription changed
      OneSignal.push(() => {
        OneSignal.on('subscriptionChange', (isSubscribed) => {
          // CONSOLE
          console.log({ isSubscribed });
          if (isSubscribed === true) {
            OneSignal.getUserId().then((userId) => {
              this.useragentid = userId;
            }).then(() => {
              // this is custom function
              // here you can send post request to php file as well.
              // OneSignalUserSubscription(this.useragentid);
            });
          } else if (isSubscribed === false) {
              OneSignal.getUserId().then((userId) => {
                this.useragentid = userId;
              });
          } else {
            console.log('Unable to process the request');
          }
        });
        resolve(true);
      });
    });
  }

  async subscribeOneSignal() {
    if (this.useragentid !== null) {
      const res = await OneSignal.setSubscription(true);
    } else {
      OneSignal.registerForPushNotifications();
    }
  }

  async unSubscribeOneSignal() {
    const res = await OneSignal.setSubscription(false);
  }

  async logout() {
    // this.btnUnsubscribe = this.btnSubscribe = false;
    localStorage.clear();
    this.authService.usuario = undefined;
    this.authService.auth$.emit(false);
    $('#onesignal-bell-container').css('display', 'none');
    this.router.navigateByUrl('/tablero').then(async res => {
      await OneSignal.setSubscription(false);
      console.log('Notificaciones desactivadas');
    });
  }

  toggleSidebar(e: any) {
    $('body').toggleClass('sb-sidenav-toggled');
  }
}

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

  title = 'AngularWeb';
  useragentid = null;
  unsubscribe = false;
  subscribe = false;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.auth$.subscribe(async res => {
      if (res === true) {
        this.initOneSignal().then(_ => {
          console.log('OneSignal initilized!');
        });
      }
    });
    this.authService.validateToken().then(auth => {
      if (auth) {
        this.initOneSignal().then(_ => {
          console.log('OneSignal initilized!');
        });
      }
    });
  }

  initOneSignal() {
   return new Promise(resolve => {
      // Init OneSignal
      OneSignal.push(async () => {
        OneSignal.init({
          appId: applicationId,
          autoRegister: false,
          notifyButton: {
            enable: false
          },
          persistNotification: false
        });
      });
      // Firstly this will check user id
      OneSignal.push(() =>  {
        OneSignal.getUserId().then((userId) => {
          console.log({userId});
          if (userId == null) {
            this.subscribe = true;
          } else {
            this.useragentid = userId;
            this.unsubscribe = true;
            OneSignal.push(['getNotificationPermission', (permission) => {
            }]);
            OneSignal.isPushNotificationsEnabled((isEnabled) => {
              console.log({isEnabled});
              if (isEnabled) {
                this.unsubscribe = true;
                this.subscribe = false;
              } else {
                this.unsubscribe = false;
                this.subscribe = true;
              }
            });
          }
        });
      });
      // Secondly this will check when subscription changed
      OneSignal.push(() => {
          OneSignal.on('subscriptionChange', (isSubscribed) => {
            console.log({isSubscribed});
            if (isSubscribed === true) {
              OneSignal.getUserId().then((userId) => {
                this.useragentid = userId;
              }).then(() => {
                // this is custom function
                // here you can send post request to php file as well.
                // OneSignalUserSubscription(this.useragentid);
              });
              this.unsubscribe = true;
              this.subscribe = false;
            } else if (isSubscribed === false) {
                OneSignal.getUserId().then((userId) => {
                  this.useragentid = userId;
                });
                this.unsubscribe = false;
                this.subscribe = true;
            } else {
              console.log('Unable to process the request');
            }
          });
      });
      resolve(true);
   });
  }

  subscribeOneSignal() {
    if (this.useragentid !== null) {
      if (confirm('¿Estás seguro de activar las notificaciones?')) {
        OneSignal.setSubscription(true);
      }
    } else {
      OneSignal.registerForPushNotifications();
    }
  }

  unSubscribeOneSignal() {
    if (confirm('¿Estás seguro de desactivar las notificaciones?')) {
      OneSignal.setSubscription(false);
    }
  }

  async logout() {
    localStorage.clear();
    this.authService.usuario = undefined;
    this.unsubscribe = this.subscribe = false;
    this.router.navigateByUrl('/tablero');
    this.logoutUnsubscribe().then(_ => {
      console.log('Notificaciones desactivadas');
    });
  }

  logoutUnsubscribe() {
    return new Promise(resolve => {
      setTimeout(() => {
        OneSignal.setSubscription(false);
        resolve(true);
      }, 3000);
    });
  }

  toggleSidebar(e: any) {
    $('body').toggleClass('sb-sidenav-toggled');
  }
}

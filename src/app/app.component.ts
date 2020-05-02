import { Component, OnInit } from '@angular/core';

const appId = 'c9b72292-e3e6-478d-a6cd-601e195ff462';
declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularWeb';
  ngOnInit() {
    const OneSignal = window.OneSignal || [];
    OneSignal.push(() => {
      // If we're on an unsupported browser, do nothing
      if (!OneSignal.isPushNotificationsSupported()) {
          return;
      }
      OneSignal.init({
        appId,
        notifyButton: {
          enable: true,
        },
      });
    });
  }
}

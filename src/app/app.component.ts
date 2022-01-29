import { Component } from '@angular/core';
import { PinsService } from './services/pins.service';
import { Pin } from './models/pin';
import { CookiesService } from './services/cookies.sevice';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-basics';
  xClicked: number = 0;
  yClicked: number = 0;
  parsedCookie: Pin[] = [];
  currentHouses: Pin[] = [];
  activePin: Pin;
  subActivePin: Subscription;
  tempPin: Pin = {} as Pin;

  constructor(
    private pinsService: PinsService,
    private cookiesService: CookiesService
  ) {
    this.getPinsByCookieFromMap();
    this.updateAllPinsByCookieFromMap();
    this.pinsService.clearActivePinFlag();
    this.currentHouses = pinsService.getCurrentHouses();
    this.subActivePin = this.pinsService.activePinStream$.subscribe(() => {
      this.activePin = this.pinsService.getActivePin();
    });
  }

  getPinsByCookieFromMap() {
    if (this.cookiesService.hasCookie('pin')) {
      this.parsedCookie = <Pin[]>(
        JSON.parse(this.cookiesService.getCookie('pin') || '')
      );
      this.pinsService.houses = this.pinsService.houses.concat(
        this.parsedCookie
      );
      this.pinsService.additionalHousesCookies =
        this.pinsService.additionalHousesCookies.concat(this.parsedCookie);
    }
  }

  updateAllPinsByCookieFromMap() {
    if (this.cookiesService.hasCookie('updatedPins')) {
      this.parsedCookie = <Pin[]>(
        JSON.parse(this.cookiesService.getCookie('updatedPins') || '')
      );
      this.parsedCookie.forEach((item) => {
        this.pinsService.houses[item.id] = item;
      });
    }
  }

  onClickPin(p: Pin) {
    this.pinsService.setActivePin(p);
    this.activePin = this.pinsService.getActivePin();
  }

  onClickMap(e: MouseEvent) {
    this.pinsService.activeX = e.clientX;
    this.xClicked = e.clientX;
    this.pinsService.activeY = e.clientY - 10;
    this.yClicked = e.clientY - 10;
    this.tempPin = { x: this.yClicked, y: this.xClicked } as Pin;
  }

  onDestroy() {
    this.subActivePin.unsubscribe();
  }
}

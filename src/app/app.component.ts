import {Component} from '@angular/core';
import {PinsService} from './services/pins.service';
import {pin} from "./models/pin-model";
import {CookiesService} from "./services/cookies.sevice";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-basics';
  xClicked: number = 0;
  yClicked: number = 0;
  cookiesTest: pin[] = [];
  currentHouses: pin[] = [];
  activePin: pin = {} as pin;

  constructor(private pinsService: PinsService, private cookiesService: CookiesService) {
    this.currentHouses = pinsService.getCurrentHouses();
    this.activePin = pinsService.activePin;
    pinsService.setActivePin(pinsService.houses[0]);
    this.checkPinCookies();
    this.checkUpdatedPinCookies();
  }

  checkPinCookies() {
    if (this.cookiesService.hasCookie('pin')) {
      this.cookiesTest = <pin[]>(
        JSON.parse(this.cookiesService.getCookie('pin') || '')
      );
      this.pinsService.houses = this.pinsService.houses.concat(this.cookiesTest);
    }
  }

  checkUpdatedPinCookies() {
    if (this.cookiesService.hasCookie('updatedPins')) {
      this.cookiesTest = <pin[]>(
        JSON.parse(this.cookiesService.getCookie('updatedPins') || '')
      );
      this.cookiesTest.forEach((item) => {
        this.pinsService.houses[item.id] = item;

        this.pinsService.houses[this.pinsService.houses.findIndex(el => el.id === item.id)] =item;

      });
    }
  }

  onClickPin(p: pin) {
    this.pinsService.setActivePin(p);
  }

  onClickMap(e: MouseEvent) {
    this.pinsService.activeX = e.clientX;
    this.xClicked = e.clientX;
    this.pinsService.activeY = e.clientY - 10;
    this.yClicked = e.clientY - 10;
  }
}

import {Component} from '@angular/core';
import {Pin, TestActionsService} from './services/test-actions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-basics';
  xClicked: number = 0;
  yClicked: number = 0;
  cookiesTest: Pin[] = [];
  currentHouses: Pin[] = [];
  activePin: Pin = {} as Pin;

  constructor(private TestActionsService: TestActionsService) {
    this.currentHouses = TestActionsService.getCurrentHouses();
    this.activePin = TestActionsService.activePin;
    TestActionsService.setActivePin(TestActionsService.houses[0]);
    if (document.cookie !== '') {
      this.checkPinCookies();
      this.checkUpdatedPinCookies();
    }
  }

  hasCookie(value: string): boolean {
    return this.TestActionsService.getCookie(value) !== undefined;
  }

  checkPinCookies() {
    if (this.hasCookie('pin')) {
      this.cookiesTest = <Pin[]>(
        JSON.parse(this.TestActionsService.getCookie('pin') || '')
      );
      this.cookiesTest.forEach((item) => {
        this.TestActionsService.houses.push(item);
      });
    }
  }

  checkUpdatedPinCookies() {
    if (this.hasCookie('updatedPins')) {
      this.cookiesTest = <Pin[]>(
        JSON.parse(this.TestActionsService.getCookie('updatedPins') || '')
      );
      this.cookiesTest.forEach((item) => {
        this.TestActionsService.houses[item.id] = item;
      });
    }
  }

  onClickPin(p: Pin) {
    this.TestActionsService.setActivePin(p);
  }

  onClickMap(e: MouseEvent) {
    this.TestActionsService.activeX = e.clientX;
    this.xClicked = e.clientX;
    this.TestActionsService.activeY = e.clientY - 10;
    this.yClicked = e.clientY - 10;
  }
}

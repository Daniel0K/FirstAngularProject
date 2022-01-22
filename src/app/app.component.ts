import { Component } from '@angular/core';
import { Pin, TestActionsService } from './services/test-actions.service';

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

  checkPinCookies() {
    if (!(this.TestActionsService.getCookie('pin') || '') === undefined) {
      this.cookiesTest = <Pin[]>(
        JSON.parse(this.TestActionsService.getCookie('pin') || '')
      );
      for (let i = 0; i < this.cookiesTest.length; i++) {
        this.TestActionsService.houses.push(this.cookiesTest[i]);
      }
    }
  }

  checkUpdatedPinCookies() {
    if (
      !(this.TestActionsService.getCookie('updatedPins') || '') === undefined
    ) {
      this.cookiesTest = <Pin[]>(
        JSON.parse(this.TestActionsService.getCookie('updatedPins') || '')
      );
      for (let i = 0; i < this.cookiesTest.length; i++) {
        this.TestActionsService.houses[this.cookiesTest[i].id] =
          this.cookiesTest[i];
      }
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

import { Component } from '@angular/core';
import {Pin, TestActionsService} from "./services/test-actions.service";
import {CookieService} from "ngx-cookie";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basics';
  xClicked: number = 0;
  yClicked: number = 0;
  cookiesTest: string = "";

  onClickPin(p:Pin) {
    console.log(p.id);
    this.TestActionsService.setActivePin(p);
  }

  onClickMap(e: MouseEvent) {
    this.TestActionsService.activeX=e.clientX;
    this.xClicked=e.clientX;
    this.TestActionsService.activeY=e.clientY-25;
    this.yClicked=e.clientY-25;
    console.log(e.clientX + " " + e.clientY);
    this.cookiesTest = document.cookie;
    console.log(this.cookiesTest);
    document.cookie = "country=RUSSIA";
    console.log(this.cookiesTest);
    console.log(this.TestActionsService.getCookie("country"));

  }



  constructor(public TestActionsService: TestActionsService, cookies: CookieService) {
    if(document.cookie == "") {

    }else {

    }
  }
}

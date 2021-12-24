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
  cookiesTest: Pin[]=[];

  onClickPin(p:Pin) {
    console.log(p.id);
    this.TestActionsService.setActivePin(p);
  }

  onClickMap(e: MouseEvent) {
    this.TestActionsService.activeX=e.clientX;
    this.xClicked=e.clientX;
    this.TestActionsService.activeY=e.clientY-10;
    this.yClicked=e.clientY-10;
    console.log(e.clientX + " " + e.clientY);
  }

  constructor(public TestActionsService: TestActionsService) {
    if(document.cookie == "") {

    }else {
      // console.log(JSON.parse(this.TestActionsService.getCookie("pin") || ""));
      // console.log(Array.isArray(JSON.parse(this.TestActionsService.getCookie("pin") || "")))
      this.cookiesTest = <Pin[]>JSON.parse(this.TestActionsService.getCookie("pin") || "");
      console.log(this.cookiesTest);
      console.log(typeof this.cookiesTest);
      for (let i=0;i<this.cookiesTest.length;i++) {
        TestActionsService.houses.push(this.cookiesTest[i]);
      }
      // console.log(<Pin[]>this.cookiesTest);


    }


  }
}

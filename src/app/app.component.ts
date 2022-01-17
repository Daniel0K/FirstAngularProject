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
  cookiesTest2: Pin[]=[];
  currentHouses: Pin[]=[];
  activePin:Pin= {} as Pin;

  constructor(private TestActionsService: TestActionsService) {
    this.currentHouses = TestActionsService.getCurrentHouses();
    this.activePin = TestActionsService.activePin;
    if(document.cookie == "") {

    }else {
      // try {
      //   this.cookiesTest = <Pin[]>JSON.parse(this.TestActionsService.getCookie("pin") || "");
      //   for (let i=0;i<this.cookiesTest.length;i++) {
      //     TestActionsService.houses.push(this.cookiesTest[i]);
      //   }
      // } catch (e) {
      //   console.log(e);
      // }



    //  this.cookiesTest.forEach((element, index) => {
    //    if(element.id === item.id) {
    //      this.cookiesTest[index] = item;
    //    }
    // });
    //   for (let i=0;i<this.cookiesTest.length;i++)
    //   for (let i=0;i<this.cookiesTest.length;i++) {
    //     // this.TestActionsService.houses.forEach((element, index) => {
    //     //   if (element.id === this.cookiesTest[i].id) {
    //     //     this.TestActionsService.houses[index] = this.cookiesTest[i];
    //     //   }else {
    //     //     TestActionsService.houses.push(this.cookiesTest[i]);
    //     //   }
    //     // })
    //     //  TestActionsService.houses[].id == cookiesTest[i].id
    //         TestActionsService.houses.push(this.cookiesTest[i]);
    //   }
    //   try {
    //     this.cookiesTest = <Pin[]>JSON.parse(this.TestActionsService.getCookie("updatedPins") || "");
    //     for (let i=0;i<this.cookiesTest.length;i++) {
    //       this.TestActionsService.houses[this.cookiesTest[i].id]=this.cookiesTest[i];
    //     }
    //   } catch (e) {
    //     console.log(e);
    //   }

      if (JSON.parse(this.TestActionsService.getCookie("pin") || "") === "") {
            return;
      } else {
        this.cookiesTest = <Pin[]>JSON.parse(this.TestActionsService.getCookie("pin") || "");
          for (let i=0;i<this.cookiesTest.length;i++) {
            TestActionsService.houses.push(this.cookiesTest[i]);
          }
      }

      if (JSON.parse(this.TestActionsService.getCookie("updatedPins") || "") === "") {
        return;
      } else {
          this.cookiesTest = <Pin[]>JSON.parse(this.TestActionsService.getCookie("updatedPins") || "");
          for (let i=0;i<this.cookiesTest.length;i++) {
            this.TestActionsService.houses[this.cookiesTest[i].id] = this.cookiesTest[i];
          }
      }

    }
  }

      // this.cookiesTest2 = <Pin[]>JSON.parse(this.TestActionsService.getCookie("updatedPins") || "");
      //
      //
      //
      // // this.TestActionsService.houses.forEach((element, index) => {
      // //
      // // })
      //
      // for (let i=0;i<this.cookiesTest2.length;i++) {
      //   this.TestActionsService.houses[this.cookiesTest2[i].id]=this.cookiesTest2[i];
      // }
      //
      // this.cookiesTest.forEach((element, index) => {
      //      if(element.id === item.id) {
      //        this.cookiesTest[index] = item;
      //      }
      //   });


    //


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
}

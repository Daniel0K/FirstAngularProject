import {Component, Input, OnInit} from '@angular/core';
import {Pin, TestActionsService} from "../services/test-actions.service";

@Component({
  selector: 'app-pins',
  templateUrl: './pins.component.html',
  styleUrls: ['./pins.component.scss']
})
export class PinsComponent {
  @Input() inputPin!: Pin

  styleCord: string = ""
  styleActivePinColor: string='';

  constructor(private TestActionsService: TestActionsService) {
    // if (this.inputPin == undefined) {
    //   console.log("constructor - undefined")
    // }
  }

  ngOnInit() {
    this.changeStylePosition(this.inputPin.x,this.inputPin.y);
  }

  ngOnChanges() {

  }

  ngDoCheck() {

  }

  changeStylePosition(x:number,y:number):void {
    this.styleCord = `top: ${x}px;left: ${y}px;`
  }
}

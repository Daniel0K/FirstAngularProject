import {Component, Input, OnInit} from '@angular/core';
import {Pin, TestActionsService} from "../services/test-actions.service";

@Component({
  selector: 'app-pins',
  templateUrl: './pins.component.html',
  styleUrls: ['./pins.component.scss']
})
export class PinsComponent {
  @Input() inputPin!: Pin

  styleTop: string = ""
  styleLeft: string = ""
  styleCoord: string = ""
  test: string =''

  constructor(private TestActionsService: TestActionsService) {
    if (this.inputPin == undefined) {
      console.log("constructor - undefined")
    }
    // console.log(TestActionsService.houses);

  }

  ngOnInit() {
    //console.log(this.inputPin.x)
    this.styleCoord = `top: ${this.inputPin.x}px;left: ${this.inputPin.y}px;`
    //console.log(this.styleCoord)
  }

  ngOnChanges() {

  }


  onClickedPin():void {

  }
}

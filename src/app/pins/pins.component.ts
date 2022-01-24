import { Component, Input, OnInit } from '@angular/core';
import { Pin } from '../models/pin'
@Component({
  selector: 'app-pins',
  templateUrl: './pins.component.html',
  styleUrls: ['./pins.component.scss'],
})
export class PinsComponent implements OnInit {
  @Input() inputPin!: Pin;

  styleCord: string = '';
  styleActivePinColor: string = '';

  ngOnInit() {
    this.changeStylePosition(this.inputPin.x, this.inputPin.y);
  }

  changeStylePosition(x: number, y: number): void {
    this.styleCord = `top: ${x}px;left: ${y}px;`;
  }
}

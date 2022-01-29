import { Component, Input, OnInit } from '@angular/core';
import { Pin } from '../models/pin';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],
})
export class PinComponent implements OnInit {
  @Input() inputPin: Pin;

  styleCord: string;
  styleActivePinColor: string;
  styleDisplay!: string;

  ngOnInit() {
    this.changeStylePosition(this.inputPin.x, this.inputPin.y);
  }

  ngOnChanges() {
    this.changeStylePosition(this.inputPin.x, this.inputPin.y);
  }

  isTemp() {
    return this.inputPin.x === undefined;
  }

  changeStylePosition(x: number, y: number): void {
    this.styleCord = `top: ${x}px;left: ${y}px;`;
  }

  isActive() {
    return this.inputPin.isActive;
  }
}

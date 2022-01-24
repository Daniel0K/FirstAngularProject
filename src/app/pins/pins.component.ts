import { Component, Input, OnInit } from '@angular/core';
import { Pin } from '../models/pin';
import { PinsService } from '../services/pins.service';

@Component({
  selector: 'app-pins',
  templateUrl: './pins.component.html',
  styleUrls: ['./pins.component.scss'],
})
export class PinsComponent implements OnInit {
  constructor(private pinService: PinsService) {}

  @Input() inputPin!: Pin;
  styleCord: string = '';
  styleActivePinColor: string = '';
  activePin: Pin = {} as Pin;

  ngOnInit() {
    this.changeStylePosition(this.inputPin.x, this.inputPin.y);
  }

  ngDoCheck() {
    this.activePin = this.pinService.activePin;
  }

  changeStylePosition(x: number, y: number): void {
    this.styleCord = `top: ${x}px;left: ${y}px;`;
  }
}

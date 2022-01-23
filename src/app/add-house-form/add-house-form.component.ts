import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PinsService } from '../services/pins.service';
import {pin} from "../models/pin-model";

@Component({
  selector: 'app-add-house-form',
  templateUrl: './add-house-form.component.html',
  styleUrls: ['./add-house-form.component.scss'],
})
export class AddHouseFormComponent {
  form: FormGroup;
  newHousePin: pin = {} as pin;

  constructor(private pinsService: PinsService) {
    this.form = new FormGroup({
      country: new FormControl('', [
        Validators.minLength(6),
        Validators.required,
      ]),
      street: new FormControl('', [
        Validators.minLength(6),
        Validators.required,
      ]),
      desc: new FormControl('', [Validators.minLength(6), Validators.required]),
    });
  }

  submit() {
    this.newHousePin = {
      id: this.pinsService.houses.length,
      x: this.pinsService.activeY,
      y: this.pinsService.activeX,
      name: this.form.value.country,
      address: this.form.value.street,
      desc: this.form.value.desc,
      booked: [],
    };
    this.pinsService.addPin(this.newHousePin);
    this.pinsService.setActivePin(this.newHousePin);
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PinsService } from '../services/pins.service';
import { Pin } from '../models/pin';

@Component({
  selector: 'app-add-house-form',
  templateUrl: './add-house-form.component.html',
  styleUrls: ['./add-house-form.component.scss'],
})
export class AddHouseFormComponent {
  form: FormGroup;
  newHousePin: Pin = {} as Pin;
  isVisible: boolean = false;

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

  changeVisibilityOfAddHouseForm() {
    this.isVisible = !this.isVisible;
    this.pinsService.setTempStatus(true);
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
    this.changeVisibilityOfAddHouseForm();
    this.pinsService.setTempStatus(false);
    this.pinsService.notConfirmedPinStream$.next(null);
  }
}

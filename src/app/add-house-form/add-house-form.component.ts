import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pin, TestActionsService } from '../services/test-actions.service';

@Component({
  selector: 'app-add-house-form',
  templateUrl: './add-house-form.component.html',
  styleUrls: ['./add-house-form.component.scss'],
})
export class AddHouseFormComponent {
  form: FormGroup;
  newHousePin: Pin = {} as Pin;

  constructor(private TestActionsService: TestActionsService) {
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
      id: this.TestActionsService.houses.length,
      x: this.TestActionsService.activeY,
      y: this.TestActionsService.activeX,
      name: this.form.value.country,
      address: this.form.value.street,
      desc: this.form.value.desc,
      booked: [],
    };
    this.TestActionsService.addPin(this.newHousePin);
    this.TestActionsService.setActivePin(this.newHousePin);
  }
}

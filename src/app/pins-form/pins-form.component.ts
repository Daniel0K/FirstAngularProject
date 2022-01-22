import { Component, DoCheck, Input } from '@angular/core';
import {
  bookings,
  Pin,
  TestActionsService,
} from '../services/test-actions.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pins-form',
  templateUrl: './pins-form.component.html',
  styleUrls: ['./pins-form.component.scss'],
})
export class PinsFormComponent implements DoCheck {
  @Input() housesData!: Pin;
  activePin: Pin = {} as Pin;
  submittedBooking: bookings = {} as bookings;

  form: FormGroup;

  constructor(private TestActionsService: TestActionsService) {
    this.form = new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
    });
  }

  ngDoCheck() {
    this.activePin = this.TestActionsService.getActivePin();
  }

  submit() {
    this.submittedBooking = {
      startDate: this.form.value.startDate,
      endDate: this.form.value.endDate,
    };
    if (
      !this.TestActionsService.checkCrossings4DatesPeriod(
        this.TestActionsService.submittedBooking,
        this.TestActionsService.houses[this.activePin.id].booked
      )
    ) {
      this.TestActionsService.addBookingToHouseById(
        this.activePin.id,
        this.submittedBooking
      );
      this.TestActionsService.setCookie('updatedPins', '');
      document.cookie = `updatedPins=${JSON.stringify(
        this.TestActionsService.houses
      )}`;
    }
  }
}

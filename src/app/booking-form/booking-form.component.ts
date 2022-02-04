import { Component, Input } from '@angular/core';
import { PinsService } from '../services/pins.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pin } from '../models/pin';
import { Bookings } from '../models/bookings';
import { BookingService } from '../services/booking.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent {
  @Input() activePin!: Pin;
  submittedBooking: Bookings = {} as Bookings;
  form: FormGroup;
  startDate: Date;
  chosenStartDate: Date;
  subscription: Subscription;

  constructor(
    private pinsService: PinsService,
    private bookingService: BookingService
  ) {
    this.form = new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
    });
    this.form.value.startDate = new Date().toISOString().split('T')[0];
    this.startDate = this.form.value.startDate;
    this.subscription = this.form
      .get('startDate')
      .valueChanges.subscribe((selectedValue) => {
        this.startDate = selectedValue;
        this.chosenStartDate = selectedValue;
      });
  }

  submit() {
    this.submittedBooking = {
      startDate: this.form.value.startDate,
      endDate: this.form.value.endDate,
    };
    if (
      this.bookingService.isBookingAvailable(
        this.submittedBooking,
        this.pinsService.houses[this.activePin.id].booked
      )
    ) {
      this.bookingService.addBookingToHouseById(
        this.activePin.id,
        this.submittedBooking
      );
      document.cookie = `updatedPins=${JSON.stringify(
        this.pinsService.houses
      )}`;
    }
    this.form.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

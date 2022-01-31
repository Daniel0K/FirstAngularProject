import { Component, Input } from '@angular/core';
import { PinsService } from '../services/pins.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pin } from '../models/pin';
import { Bookings } from '../models/bookings';
import { BookingService } from '../services/booking.service';
import { CookiesService } from '../services/cookies.sevice';

@Component({
  selector: 'app-pins-form',
  templateUrl: './pins-form.component.html',
  styleUrls: ['./pins-form.component.scss'],
})
export class PinsFormComponent {
  @Input() activePin!: Pin;
  submittedBooking: Bookings = {} as Bookings;
  form: FormGroup;
  startDate: Date;

  constructor(
    private pinsService: PinsService,
    private bookingService: BookingService,
    private CookiesService: CookiesService
  ) {
    this.form = new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
    });
    this.form.value.startDate = new Date().toISOString().split('T')[0];
    this.startDate = this.form.value.startDate;
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
      this.CookiesService.setCookie('updatedPins', '');
      document.cookie = `updatedPins=${JSON.stringify(
        this.pinsService.houses
      )}`;
    }
    this.form.reset();
  }
}

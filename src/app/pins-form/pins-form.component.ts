import { Component, DoCheck, Input } from '@angular/core';
import {PinsService} from '../services/pins.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Pin} from "../models/pin";
import {Bookings} from "../models/bookings";
import {BookingService} from '../services/booking.service'
import {CookiesService} from "../services/cookies.sevice";


@Component({
  selector: 'app-pins-form',
  templateUrl: './pins-form.component.html',
  styleUrls: ['./pins-form.component.scss'],
})
export class PinsFormComponent implements DoCheck {
  @Input() housesData!: Pin;
  activePin: Pin = {} as Pin;
  submittedBooking: Bookings = {} as Bookings;

  form: FormGroup;

  constructor(private pinsService: PinsService, private bookingService: BookingService, private CookiesService: CookiesService) {
    this.form = new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
    });
  }

  ngDoCheck() {
    this.activePin = this.pinsService.getActivePin();
  }

  submit() {
    this.submittedBooking = {
      startDate: this.form.value.startDate,
      endDate: this.form.value.endDate,
    };
    if (
      !this.bookingService.isBookingExists(
        this.pinsService.submittedBooking,
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
  }
}

import { Injectable } from '@angular/core';
import { bookings } from '../models/bookings-model';
import { PinsService } from './pins.service';


@Injectable({
  providedIn: 'root',
})
export class BookingService {

  constructor(private pinsService: PinsService) {
  }

  addBookingToHouseById(id: number, submittedBooking: bookings) {
    this.pinsService.houses[id].booked.push(submittedBooking);
  }

  isBookingExists(
    currentBooking: bookings,
    existBookings: bookings[]
  ): boolean {
    for (let i = 0; i < existBookings.length; i++) {
      if (
        currentBooking.startDate <= existBookings[i].endDate &&
        existBookings[i].startDate <= currentBooking.endDate
      ) {
        return true;
      } else {
        continue;
      }
    }
    return false;
  }
}

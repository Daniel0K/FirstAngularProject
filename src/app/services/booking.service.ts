import { Injectable } from '@angular/core';
import { Bookings } from '../models/bookings';
import { PinsService } from './pins.service';


@Injectable({
  providedIn: 'root',
})
export class BookingService {

  constructor(private pinsService: PinsService) {
  }

  addBookingToHouseById(id: number, submittedBooking: Bookings) {
    this.pinsService.houses[id].booked.push(submittedBooking);
  }

  isBookingExists(
    currentBooking: Bookings,
    existBookings: Bookings[]
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

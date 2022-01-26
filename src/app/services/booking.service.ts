import { Injectable } from '@angular/core';
import { Bookings } from '../models/bookings';
import { PinsService } from './pins.service';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private pinsService: PinsService) {}

  addBookingToHouseById(id: number, submittedBooking: Bookings) {
    this.pinsService.houses[id].booked.push(submittedBooking);
  }

  isDateCrossingExists(
    currentBooking: Bookings,
    existBookings: Bookings[]
  ): boolean {
    for (let i = 0; i < existBookings.length; i++) {
      if (
        currentBooking.startDate <= existBookings[i].endDate &&
        existBookings[i].startDate <= currentBooking.endDate
      ) {
        return false;
      } else {
        continue;
      }
    }
    return true;
  }

  isBookingExists(
    currentBooking: Bookings,
    existBookings: Bookings[]
  ): boolean {
    if (!(currentBooking.endDate <= currentBooking.startDate)) {
      if (currentBooking.startDate !== currentBooking.endDate) {
        if (this.isDateCrossingExists(currentBooking, existBookings)) {
          return true;
        } else return false;
      } else return false;
    } else return false;
  }
}

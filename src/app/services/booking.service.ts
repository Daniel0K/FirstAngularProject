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
    for (const item of existBookings) {
      if (
        currentBooking.startDate <= item.endDate &&
        item.startDate <= currentBooking.endDate
      ) {
        return false;
      }
      continue;
    }
    return true;
  }

  isBookingAvailable(
    currentBooking: Bookings,
    existBookings: Bookings[]
  ): boolean {
    return this.isDateCrossingExists(currentBooking, existBookings);
  }
}

import { PinsService } from './pins.service';
import { Bookings } from '../models/bookings';
import { BookingService } from './booking.service';

describe('test-actions-service', () => {
  let mainService: PinsService;
  let bookingService: BookingService;

  beforeEach(() => {
    mainService = new PinsService();
    bookingService = new BookingService(mainService);
  });

  it('should return true when there are no crossing', () => {
    const newBooking: Bookings = {
      startDate: new Date(2021, 5, 21),
      endDate: new Date(2021, 5, 22),
    };
    const prevBookings = [];
    const tempBook1 = {
      startDate: new Date(2021, 5, 25),
      endDate: new Date(2021, 5, 26),
    };
    const tempBook2 = {
      startDate: new Date(2021, 5, 27),
      endDate: new Date(2021, 5, 28),
    };

    prevBookings.push(tempBook1);
    prevBookings.push(tempBook2);

    expect(
      bookingService.isDateCrossingExists(newBooking, prevBookings)
    ).toBeTruthy();
  });

  it('should return false when crossing exists', () => {
    const newBooking: Bookings = {
      startDate: new Date(2021, 5, 20),
      endDate: new Date(2021, 5, 28),
    };
    const prevBookings = [
      {
        startDate: new Date(2021, 5, 27),
        endDate: new Date(2021, 5, 28),
      },
      {
        startDate: new Date(2021, 5, 25),
        endDate: new Date(2021, 5, 26),
      },
    ];

    expect(
      bookingService.isDateCrossingExists(newBooking, prevBookings)
    ).toBeFalsy();
  });
});

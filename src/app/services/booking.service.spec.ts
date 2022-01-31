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

  it('should check bookings date for crossings. It will be return true because no crossing', () => {
    const newBooking = {} as Bookings;
    const prevBookings = [];
    const tempBook1 = {} as Bookings;
    const tempBook2 = {} as Bookings;
    newBooking.startDate = new Date(2021, 5, 21);
    newBooking.endDate = new Date(2021, 5, 22);
    tempBook1.startDate = new Date(2021, 5, 25);
    tempBook1.endDate = new Date(2021, 5, 26);
    tempBook2.startDate = new Date(2021, 5, 27);
    tempBook2.endDate = new Date(2021, 5, 28);

    prevBookings.push(tempBook1);
    prevBookings.push(tempBook2);

    expect(
      bookingService.isDateCrossingExists(newBooking, prevBookings)
    ).toBeTruthy();
  });

  it('should check bookings date for crossings. It will be return false because crossing exist', () => {
    const newBooking = {} as Bookings;
    const prevBookings = [];
    const tempBook1 = {} as Bookings;
    const tempBook2 = {} as Bookings;
    newBooking.startDate = new Date(2021, 5, 20);
    newBooking.endDate = new Date(2021, 5, 28);
    tempBook1.startDate = new Date(2021, 5, 25);
    tempBook1.endDate = new Date(2021, 5, 26);
    tempBook2.startDate = new Date(2021, 5, 27);
    tempBook2.endDate = new Date(2021, 5, 28);

    prevBookings.push(tempBook1);
    prevBookings.push(tempBook2);

    expect(
      bookingService.isDateCrossingExists(newBooking, prevBookings)
    ).toBeFalsy();
  });

  it('check if endDate less than startDate', () => {});
});

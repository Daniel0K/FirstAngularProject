import {PinsService} from './pins.service';
import {Pin} from '../models/pin'
import {Bookings} from '../models/bookings'
import {BookingService} from "./booking.service";

describe('test-actions-service', () => {
  let mainService: PinsService;
  let bookingService: BookingService;
  const fakePin = {
    id: 0,
    y: 100,
    x: 100,
    name: 'Тестовандия',
    address: 'Тестовый',
    desc: 'Тестовая среда',
    booked: [],
  };
  beforeEach(() => {
    mainService = new PinsService();
    bookingService = new BookingService(mainService);
  });

  it('should increase houses to one more', () => {
    const defaultLength: number = mainService.houses.length;

    mainService.addPin(fakePin);

    expect(mainService.houses.length).toBe(defaultLength + 1);
  });

  it('should check bookings date for crossings. It will be return false because no crossing', () => {
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
      bookingService.isBookingExists(newBooking, prevBookings)
    ).toBeFalsy();
  });

  it('should check bookings date for crossings. It will be return true because crossing exist', () => {
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
      bookingService.isBookingExists(newBooking, prevBookings)
    ).toBeTruthy();
  });

  it('should return active pin object has been chosen by user on map', () => {
    const activePin: Pin = {
      id: 0,
      y: 100,
      x: 100,
      name: 'Тестовандия',
      address: 'Тестовый',
      desc: 'Тестовая среда',
      booked: [],
    };

    mainService.setActivePin(activePin);
    const newPin: Pin = mainService.getActivePin();

    expect(mainService.activePin).toBe(newPin);
  });
});

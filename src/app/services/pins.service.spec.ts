import { PinsService } from './pins.service';
import { Pin } from '../models/pin';
import { Bookings } from '../models/bookings';
import { BookingService } from './booking.service';

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
    booked: [] as Bookings[],
    isActive: true,
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

  it('should return active pin object has been chosen by user on map', () => {
    const activePin: Pin = {
      id: 0,
      y: 885,
      x: 150,
      name: 'Россия',
      address: 'Лучший',
      desc: 'Самое топовое место в мире ',
      booked: [],
      isActive: true,
    };

    mainService.setActivePin(activePin);
    const newPin: Pin = mainService.getActivePin();

    expect(mainService.getActivePin()).toBe(newPin);
  });
});

import { bookings, Pin, TestActionsService } from './test-actions.service';

describe('test-actions-service', () => {
  let service: TestActionsService;
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
    service = new TestActionsService();
  });

  it('should increase houses to one more', () => {
    const defaultLength: number = service.houses.length;

    service.addPin(fakePin);

    expect(service.houses.length).toBe(defaultLength + 1);
  });

  it('should check bookings date for crossings. It will be return false because no crossing', () => {
    const newBooking = {} as bookings;
    const prevBookings = [];
    const tempBook1 = {} as bookings;
    const tempBook2 = {} as bookings;
    newBooking.startDate = new Date(2021, 5, 21);
    newBooking.endDate = new Date(2021, 5, 22);
    tempBook1.startDate = new Date(2021, 5, 25);
    tempBook1.endDate = new Date(2021, 5, 26);
    tempBook2.startDate = new Date(2021, 5, 27);
    tempBook2.endDate = new Date(2021, 5, 28);

    prevBookings.push(tempBook1);
    prevBookings.push(tempBook2);

    expect(
      service.checkCrossings4DatesPeriod(newBooking, prevBookings)
    ).toBeFalsy();
  });

  it('should check bookings date for crossings. It will be return true because crossing exist', () => {
    const newBooking = {} as bookings;
    const prevBookings = [];
    const tempBook1 = {} as bookings;
    const tempBook2 = {} as bookings;
    newBooking.startDate = new Date(2021, 5, 20);
    newBooking.endDate = new Date(2021, 5, 28);
    tempBook1.startDate = new Date(2021, 5, 25);
    tempBook1.endDate = new Date(2021, 5, 26);
    tempBook2.startDate = new Date(2021, 5, 27);
    tempBook2.endDate = new Date(2021, 5, 28);

    prevBookings.push(tempBook1);
    prevBookings.push(tempBook2);

    expect(
      service.checkCrossings4DatesPeriod(newBooking, prevBookings)
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

    service.setActivePin(activePin);
    const newPin: Pin = service.getActivePin();

    expect(service.activePin).toBe(newPin);
  });
});

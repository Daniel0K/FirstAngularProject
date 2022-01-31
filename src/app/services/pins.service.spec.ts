import { PinsService } from './pins.service';
import { Pin } from '../models/pin';
import { Bookings } from '../models/bookings';

describe('test-actions-service', () => {
  let mainService: PinsService;
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
  });

  it('should increase houses to one more', () => {
    const defaultLength: number = mainService.houses.length;

    mainService.addPin(fakePin);

    expect(mainService.houses.length).toBe(defaultLength + 1);
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

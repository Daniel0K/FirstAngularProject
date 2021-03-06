import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingFormComponent } from './booking-form.component';
import { PinsService } from '../services/pins.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Bookings } from '../models/bookings';

describe('PinsForm', () => {
  let component: BookingFormComponent;
  let fixture: ComponentFixture<BookingFormComponent>;
  let service: PinsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingFormComponent],
      providers: [ReactiveFormsModule, FormsModule, { provide: PinsService }],
    });
    fixture = TestBed.createComponent(BookingFormComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(PinsService);
  });

  it('should be true if startDate picked', () => {
    const el = component.form.get('startDate');
    el?.setValue(new Date(2023, 1, 1));
    expect(el?.valid).toBeTruthy();
  });

  it('should be true if endDate picked', () => {
    const el = component.form.get('endDate');
    el?.setValue(new Date(2023, 1, 2));
    expect(el?.valid).toBeTruthy();
  });

  it('should add booking to house after submit', () => {
    const activePin = {
      id: 0,
      y: 100,
      x: 100,
      name: 'Тестовандия',
      address: 'Тестовый',
      desc: 'Тестовая среда',
      booked: [] as Bookings[],
    };

    component.activePin = activePin;
    const el = component.form.get('startDate');
    el?.setValue(new Date(2023, 1, 1));
    const el2 = component.form.get('endDate');
    el2?.setValue(new Date(2023, 1, 2));

    component.submit();

    expect(service.houses[component.activePin.id].booked[0].startDate).toEqual(
      new Date(2023, 1, 1)
    );
  });
});

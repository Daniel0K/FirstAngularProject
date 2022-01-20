import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PinsFormComponent } from './pins-form.component';
import { TestActionsService } from '../services/test-actions.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('PinsForm', () => {
  let component: PinsFormComponent;
  let fixture: ComponentFixture<PinsFormComponent>;
  let service: TestActionsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinsFormComponent],
      providers: [
        ReactiveFormsModule,
        FormsModule,
        { provide: TestActionsService },
      ],
    });
    fixture = TestBed.createComponent(PinsFormComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(TestActionsService);
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
    service.activePin = {
      id: 0,
      y: 100,
      x: 100,
      name: 'Тестовандия',
      address: 'Тестовый',
      desc: 'Тестовая среда',
      booked: [],
    };
    component.activePin = service.activePin;
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

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AddHouseFormComponent} from './add-house-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TestActionsService} from '../services/test-actions.service';

describe('AddHouseForm', () => {
  let component: AddHouseFormComponent;
  let fixture: ComponentFixture<AddHouseFormComponent>;
  let service: TestActionsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHouseFormComponent],
      providers: [
        ReactiveFormsModule,
        FormsModule,
        {provide: TestActionsService},
      ],
    });
    fixture = TestBed.createComponent(AddHouseFormComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(TestActionsService);
  });

  it('should be true if control country on form was typed and have more or eq 6 letters', () => {
    const el = component.form.get('country');

    el?.setValue('Russia');

    expect(el?.valid).toBeTruthy();
  });
  it('should be false if control country on form less then 6 letters', () => {
    const el = component.form.get('country');

    el?.setValue('Kuba');

    expect(el?.valid).toBeFalsy();
  });

  it('should be true if control street on form was typed and have more or eq 6 letters', () => {
    const el = component.form.get('street');

    el?.setValue('Калининградская');

    expect(el?.valid).toBeTruthy();
  });

  it('should be false if control street on form less then 6 letters', () => {
    const el = component.form.get('street');

    el?.setValue('Права');

    expect(el?.valid).toBeFalsy();
  });

  it('should be true if desc typed', () => {
    const el = component.form.get('desc');

    el?.setValue('Интересный район');

    expect(el?.valid).toBeTruthy();
  });

  it('should be false if control desc on form less then 6 letters', () => {
    const el = component.form.get('desc');

    el?.setValue('Описа');

    expect(el?.valid).toBeFalsy();
  });

  it('should check data from form and setting their to main houses array when send button was pressed (submit)', () => {
    const activeX: number = 100;
    const activeY: number = 200;
    service.activeX = activeX;
    service.activeY = activeY;
    const el = component.form.get('country');
    el?.setValue('ТестТест1');
    const el2 = component.form.get('street');
    el2?.setValue('ТестТест2');
    const el3 = component.form.get('desc');
    el3?.setValue('ТестТест3');

    component.submit();
    const lastEl = service.houses.pop();

    expect(lastEl).toBe(component.newHousePin);
  });
});

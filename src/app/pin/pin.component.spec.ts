import { PinComponent } from './pin.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('Pin', () => {
  let component: PinComponent;
  let fixture: ComponentFixture<PinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinComponent],
    });
    fixture = TestBed.createComponent(PinComponent);
    component = fixture.componentInstance;
  });

  it('should set x and y for first appearing of pin on map', () => {
    const x: number = 100;
    const y: number = 150;

    component.changeStylePosition(x, y);

    expect(component.styleCord).toBe('top: 100px;left: 150px;');
  });
});

import { PinsComponent } from './pins.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import 'zone.js';

describe('Pins', () => {
  let component: PinsComponent;
  let fixture: ComponentFixture<PinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinsComponent],
    });
    fixture = TestBed.createComponent(PinsComponent);
    component = fixture.componentInstance;
  });

  it('should set x and y for first appearing of pin on map', () => {
    const x: number = 100;
    const y: number = 150;

    component.changeStylePosition(x, y);

    expect(component.styleCord).toBe('top: 100px;left: 150px;');
  });
});

import {PinsComponent} from "../pins/pins.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {TestActionsService} from "../services/test-actions.service";

describe('Pins', () => {
  let component: PinsComponent;
  let fixture: ComponentFixture<PinsComponent>;
  let service: TestActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule( {
      declarations:[PinsComponent]
    })
    fixture = TestBed.createComponent(PinsComponent)
    component = fixture.componentInstance
    service = new TestActionsService();
  })

  it ('should set x and y for first appearing of pin on map', ()=> {
    let x: number = 100;
    let y: number = 150;

    component.changeStylePosition(100,150)

    expect(component.styleCord).toBe("top: 100px;left: 150px;")
  })
})

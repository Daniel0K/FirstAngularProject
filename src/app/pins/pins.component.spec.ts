import {PinsComponent} from "../pins/pins.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";
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

  // it('should be great', ()=> {
  //   expect(component).toBeDefined();
  // })
  it ('should call ng0nInit and change StyleCord var', ()=> {
      const spy = spyOn(component,'ngOnInit').and.callFake(() => {
        component.changeStylePosition(100,150);
      })
    component.ngOnInit();
    expect(component.styleCord).toBe("top: 100px;left: 150px;")
  })


  // it('should be great', ()=> {
  //   let activePin = {
  //     id:0,
  //     y:100,
  //     x:100,
  //     name:'Тестовандия',
  //     address:'Тестовый',
  //     desc:'Тестовая среда',
  //     booked:[]
  //   }
  //   //let de:DebugElement = fixture.debugElement.query(By.css('#name'))
  //
  //   // de.nativeElement.
  //
  //
  //   // expect(de.nativeElement.textContent).toContain("Название: "+activePin.name.toString())
  //   // de.nativeElement.toContain(activePin.name.toString());
  // })

})

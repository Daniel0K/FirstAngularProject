import {PinsComponent} from "../pins/pins.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {PinsFormComponent} from "./pins-form.component";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";
import {TestActionsService} from "../services/test-actions.service";

describe('PinsForm', () => {
  let component: PinsFormComponent;
  let fixture: ComponentFixture<PinsFormComponent>;
  let service: TestActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule( {
      declarations:[PinsFormComponent]
    })
    fixture = TestBed.createComponent(PinsFormComponent)
    component = fixture.componentInstance
    service = new TestActionsService();
  })

  // it('should be great', ()=> {
  //   expect(component).toBeDefined();
  // })
  //   it('should be great', ()=> {
  //     let activePin = {
  //     id:0,
  //     y:100,
  //     x:100,
  //     name:'Тестовандия',
  //     address:'Тестовый',
  //     desc:'Тестовая среда',
  //     booked:[]
  //     }
  //     // let de:DebugElement = fixture.debugElement.query(By.css('#name'))
  //     // expect(de.nativeElement.textContent).toContain("Название: "+activePin.name.toString())
  //     // component.form.patchValue({startDate:new Date(2021,5,25),endDate:new Date(2021,5,26)})
  //
  //     //expect(component.form.contains('startDate')).toBe(true)
  //
  //     // de.nativeElement.toContain(activePin.name.toString());
  //   })

  it('should be true if startDate picked',()=> {
    const el = component.form.get('startDate');
    el?.setValue(new Date(2023,1,1));
    expect(el?.valid).toBeTruthy();
    //console.log(el);
  })

  it('should be true if endDate picked',()=> {
    const el = component.form.get('endDate');
    el?.setValue(new Date(2023,1,2));
    expect(el?.valid).toBeTruthy();
    //console.log(el);
  })

  // it('test', ()=>{
  //   // service.submittedBooking = {startDate:(new Date(2023,1,1)),endDate:(new Date(2023,1,2))};
  //   service.activePin = {
  //     id:0,
  //     y:100,
  //     x:100,
  //     name:'Тестовандия',
  //     address:'Тестовый',
  //     desc:'Тестовая среда',
  //     booked:[]
  //   }
  //
  //   component.activePin = service.activePin;
  //   const el = component.form.get('startDate');
  //   el?.setValue(new Date(2023,1,1));
  //   const el2 = component.form.get('endDate');
  //   el2?.setValue(new Date(2023,1,2));
  //
  //   let btn = fixture.debugElement.query(By.css('.btn'))
  //   // btn.triggerEventHandler('click',null);
  //   // console.log(btn.triggerEventHandler('submit',null));
  //   component.submit();
  //
  //
  //   console.log("test")
  //   console.log(service.houses[service.activePin.id]);
  //   console.log(component.form)
  //   expect(service.houses[service.activePin.id].booked[0].startDate).toBe(new Date(2023,1,1));
  //   console.log("test")
  //   console.log(service.houses[service.activePin.id]);
  //
  // })







})

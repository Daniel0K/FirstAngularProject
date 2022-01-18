import {PinsComponent} from "../pins/pins.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";
import {AddHouseFormComponent} from "./add-house-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TestActionsService} from "../services/test-actions.service";

describe('AddHouseForm', () => {
  let component: AddHouseFormComponent;
  let fixture: ComponentFixture<AddHouseFormComponent>;
  let service: TestActionsService;
  beforeEach(() => {
    TestBed.configureTestingModule( {
      declarations:[AddHouseFormComponent],
      providers:[ReactiveFormsModule,FormsModule, { provide: TestActionsService }]
    })
    fixture = TestBed.createComponent(AddHouseFormComponent)
    component = fixture.componentInstance
    service = fixture.debugElement.injector.get(TestActionsService);
  })

  it('should be true if country typed',()=> {
    const el = component.form.get('country');
    el?.setValue('Russia');
    expect(el?.valid).toBeTruthy();
    //console.log(el);
  })
  it('should be false if country have less then 6 letters',()=> {
    const el = component.form.get('country');
    el?.setValue('Kuba');
    expect(el?.valid).toBeFalsy();
    //console.log(el);
  })

  it('should be true if street typed',()=> {
    const el = component.form.get('street');
    el?.setValue('Калининградская');
    expect(el?.valid).toBeTruthy();
    //console.log(el);
  })

  it('should be false if street have less then 6 letters',()=> {
    const el = component.form.get('street');
    el?.setValue('Права');
    expect(el?.valid).toBeFalsy();
    //console.log(el);
  })

  it('should be true if desc typed',()=> {
    const el = component.form.get('desc');
    el?.setValue('Интересный район');
    expect(el?.valid).toBeTruthy();
    //console.log(el);
  })

  it('should be false if desc have less then 6 letters',()=> {
    const el = component.form.get('desc');
    el?.setValue('Описа');
    expect(el?.valid).toBeFalsy();
    //console.log(el);
  })

  it ('submit', ()=>{

    let activeX:number = 100;
    let activeY:number = 200;
    service.activeX = activeX;
    service.activeY = activeY;

    const el = component.form.get('country');
    el?.setValue('ТестТест1');
    const el2 = component.form.get('street');
    el2?.setValue('ТестТест2');
    const el3 = component.form.get('desc');
    el3?.setValue('ТестТест3');
    component.submit();
    // fixture.detectChanges();

    expect(service.houses[service.houses.length-1].x).toBe(200);
    expect(service.houses[service.houses.length-1].y).toBe(100);
    expect(service.houses[service.houses.length-1].desc).toBe('ТестТест3');
    expect(service.houses[service.houses.length-1].address).toBe('ТестТест2');
    expect(service.houses[service.houses.length-1].name).toBe('ТестТест1');
  })



})

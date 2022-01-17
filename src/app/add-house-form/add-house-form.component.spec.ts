import {PinsComponent} from "../pins/pins.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";
import {AddHouseFormComponent} from "./add-house-form.component";

describe('AddHouseForm', () => {
  let component: AddHouseFormComponent;
  let fixture: ComponentFixture<AddHouseFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule( {
      declarations:[AddHouseFormComponent]
    })
    fixture = TestBed.createComponent(AddHouseFormComponent)
    component = fixture.componentInstance
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



})
